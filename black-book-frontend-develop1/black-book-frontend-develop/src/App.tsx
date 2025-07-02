import { CircularProgress, Stack } from '@mui/material';

import { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useGetUsersQuery } from './api';
import { Header } from './components/Header';
import { UserCard } from './components/UserCard';
import { UsersList } from './components/UsersList';
import { isValidValue } from './lib/isValidValue';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState<number>(1);
  const [inputError, setInputError] = useState<boolean>(false);
  const {
    data: apiResponse,
    isLoading,
    refetch,
  } = useGetUsersQuery(
    {
      page,
      searchValue: inputRef.current?.value || '',
    },
    {
      skip: inputRef.current?.value
        ? !isValidValue(inputRef.current?.value)
        : false,
    },
  );

  const handleSearch = () => {
    if (
      inputRef.current?.value &&
      inputRef.current?.value.trim().length === 0
    ) {
      return;
    }
    if (inputRef.current?.value && !isValidValue(inputRef.current?.value)) {
      setInputError(true);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
    }

    setInputError(false);
    setPage(1);
    refetch();
  };

  const handlePageChange = useCallback((_event: unknown, newPage: number) => {
    const nextPage = newPage + 1;
    setPage(nextPage);
  }, []);

  return (
    <>
      <Header
        inputRef={inputRef}
        handleSearch={handleSearch}
        error={inputError}
      />
      <Stack
        alignItems={'center'}
        height='100%'
        sx={{
          padding: {
            xs: '98px 20px 88px',
            lg: '110px 100px 100px',
          },
        }}
      >
        {isLoading && (
          <Stack height={'100vh'} justifyContent={'center'}>
            <CircularProgress size={'100px'} />
          </Stack>
        )}

        {!isLoading && (
          <Routes>
            <Route
              path='/'
              element={
                <UsersList
                  users={apiResponse?.data || []}
                  totalCount={apiResponse?.totalCount || 0}
                  page={page - 1}
                  pagination={
                    !!inputRef.current?.value.trim() &&
                    isValidValue(inputRef.current?.value)
                  }
                  onPageChange={handlePageChange}
                />
              }
            />
            <Route path='users/:id' element={<UserCard />} />
          </Routes>
        )}
      </Stack>
    </>
  );
}

export default App;
