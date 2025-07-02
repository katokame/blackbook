import { Stack, Table, TableBody } from '@mui/material';

import { IUser } from '../../types';
import { Styled } from './usersList.styled';

type UserCardListProps = {
  users: IUser[];
  onClick: (id: number) => void;
};

export const UserCardList: React.FC<UserCardListProps> = ({
  users,
  onClick,
}) => {
  return (
    <Styled.CardsContainer>
      <Stack gap={'8px'}>
        {users.map((user) => (
          <Styled.CardContainer key={user.id} onClick={() => onClick(user.id)}>
            <Table>
              <TableBody>
                <Styled.CardTableRow>
                  <Styled.StyledTableCell component='th' scope='row'>
                    ФИО
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.lastName} {user.firstName} {user.middleName || ''}
                  </Styled.StyledTableCell>
                </Styled.CardTableRow>
                <Styled.CardTableRow>
                  <Styled.StyledTableCell component='th' scope='row'>
                    Место проживания
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.residency || '-'}
                  </Styled.StyledTableCell>
                </Styled.CardTableRow>
                <Styled.CardTableRow>
                  <Styled.StyledTableCell component='th' scope='row'>
                    Налоговый номер
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.taxId || '-'}
                  </Styled.StyledTableCell>
                </Styled.CardTableRow>
                <Styled.CardTableRow>
                  <Styled.StyledTableCell component='th' scope='row'>
                    Профессия
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.profession || '-'}
                  </Styled.StyledTableCell>
                </Styled.CardTableRow>
                <Styled.CardTableRow>
                  <Styled.StyledTableCell component='th' scope='row'>
                    Телефон
                  </Styled.StyledTableCell>
                  <Styled.StyledTableCell>
                    {user.phone || '-'}
                  </Styled.StyledTableCell>
                </Styled.CardTableRow>
                <Styled.CardTableRow>
                  <Styled.StyledTableCell component='th' scope='row'>
                    Подробнее
                  </Styled.StyledTableCell>
                  <Styled.ButtonTableCell>
                    <Styled.StyledButton
                      variant='outlined'
                      onClick={() => onClick(user.id)}
                    >
                      подробнее
                    </Styled.StyledButton>
                  </Styled.ButtonTableCell>
                </Styled.CardTableRow>
              </TableBody>
            </Table>
          </Styled.CardContainer>
        ))}
      </Stack>
    </Styled.CardsContainer>
  );
};
