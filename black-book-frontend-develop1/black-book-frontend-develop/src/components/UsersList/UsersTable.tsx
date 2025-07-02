import { TableBody, TableHead, TableRow } from '@mui/material';

import type { IUser } from '../../types';
import { Styled } from './usersList.styled';

type UsersTableProps = {
  users: IUser[];
  onClick: (id: number) => void;
};

export const UsersTable = ({ users, onClick }: UsersTableProps) => {
  return (
    <>
      <Styled.StyledTableContainer>
        <Styled.StyledTable stickyHeader>
          <TableHead>
            <TableRow>
              <Styled.StyledTableCell width='22%'>ФИО</Styled.StyledTableCell>
              <Styled.StyledTableCell width='20%'>
                Место проживания
              </Styled.StyledTableCell>
              <Styled.StyledTableCell width='14%'>
                Налоговый номер
              </Styled.StyledTableCell>
              <Styled.StyledTableCell width='18%'>
                Профессия
              </Styled.StyledTableCell>
              <Styled.StyledTableCell width='12%'>
                Телефон
              </Styled.StyledTableCell>
              <Styled.StyledTableCell width='14%'>
                Подробнее
              </Styled.StyledTableCell>
            </TableRow>
          </TableHead>

          {users && (
            <TableBody>
              {users.map((user) => (
                <Styled.StyledTableRow
                  key={user.id}
                  onClick={() => onClick(user.id)}
                >
                  <Styled.StyledTableCell>
                    {user.lastName} {user.firstName} {user.middleName || ''}
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.residency || '-'}
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.taxId || '-'}
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.profession || '-'}
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.phone || '-'}
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    <Styled.StyledButton
                      variant='outlined'
                      onClick={() => onClick(user.id)}
                    >
                      подробнее
                    </Styled.StyledButton>
                  </Styled.StyledTableCell>
                </Styled.StyledTableRow>
              ))}
            </TableBody>
          )}
        </Styled.StyledTable>
      </Styled.StyledTableContainer>
    </>
  );
};

UsersTable.displayName = 'UsersTable';
