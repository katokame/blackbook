import CloseIcon from '@mui/icons-material/Close';
import {
  IconButton,
  TablePagination,
  Theme,
  useMediaQuery,
} from '@mui/material';

import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import type { IUser } from '../../types';
import { UserCardList } from './UserCardList';
import { UsersTable } from './UsersTable';

type UsersListProps = {
  users: IUser[];
  totalCount: number;
  page: number;
  pagination: boolean;
  onPageChange: (_event: React.MouseEvent | null, newPage: number) => void;
};

export const UsersList = ({
  users,
  totalCount,
  page,
  pagination,
  onPageChange,
}: UsersListProps) => {
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = (id: number) => {
    navigate(`users/${id}`);
  };

  useEffect(() => {
    if (users.length === 0) {
      const snackbarKey = enqueueSnackbar(
        'По вашему запросу ничего не найдено',
        {
          variant: 'error',
          action: (key) => (
            <IconButton
              size='small'
              color='inherit'
              onClick={() => {
                closeSnackbar(key);
              }}
            >
              <CloseIcon />
            </IconButton>
          ),
        },
      );

      return () => closeSnackbar(snackbarKey);
    }
  }, [enqueueSnackbar, closeSnackbar, users]);

  return (
    <>
      {isMobileScreen && <UserCardList users={users} onClick={handleClick} />}

      {!isMobileScreen && <UsersTable users={users} onClick={handleClick} />}

      {pagination && (
        <TablePagination
          component={'div'}
          count={totalCount}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} из ${count}`
          }
        />
      )}
    </>
  );
};

UsersList.displayName = 'UsersList';
