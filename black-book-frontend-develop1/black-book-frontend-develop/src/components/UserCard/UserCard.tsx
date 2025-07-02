import { CircularProgress, IconButton, Stack } from '@mui/material';

import { useNavigate, useParams } from 'react-router';

import { useGetUserQuery } from '../../api';
import { UserField } from './UserField';
import { Styled } from './userCard.styled';

export const UserCard: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, isLoading } = useGetUserQuery({ id });

  const formattedDate = (dateStr: string): string => {
    if (!dateStr) return '-';
    const [year, month, day] = dateStr.split('-');
    return `${day}.${month}.${year}`;
  };

  if (isLoading) {
    return (
      <Stack height={'100vh'} justifyContent={'center'}>
        <CircularProgress size={'100px'} />
      </Stack>
    );
  }

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      {user && (
        <Styled.StyledBox>
          <Stack>
            <IconButton onClick={() => navigate(`/`)}>
              <Styled.StyledIcon />
            </IconButton>
          </Stack>

          <Styled.ContentContainer>
            <Styled.ContentBox>
              <UserField
                label='ФИО'
                value={`${user.lastName} ${user.firstName} ${user.middleName || ''}`}
              />
              <UserField
                label='Дата рождения'
                value={formattedDate(user.birthDate)}
              />
              <UserField
                label='Пол'
                value={user.gender === 'MALE' ? 'Мужской' : 'Женский'}
              />
              <UserField label='Профессия' value={user.profession || '-'} />
              <UserField label='Гражданство' value={user.citizenship || '-'} />
              <UserField
                label='Место рождения'
                value={user.birthPlace || '-'}
              />
              <UserField label='Комментарий' value={user.comment || '-'} />
            </Styled.ContentBox>

            <Styled.ContentBox>
              <UserField
                label='Место проживания'
                value={user.residency || '-'}
              />
              <UserField label='СНИЛС' value={user.snils || '-'} />
              <UserField label='Налоговый номер' value={user.taxId || '-'} />
              <UserField label='Телефон' value={user.phone || '-'} />
              <UserField
                label='Начало обучения'
                value={formattedDate(user.startTraining)}
              />
              <UserField
                label='Конец обучения'
                value={formattedDate(user.endTraining)}
              />
              <UserField
                label='Реальный опыт'
                value={user.realExperience || '-'}
              />
            </Styled.ContentBox>
          </Styled.ContentContainer>
        </Styled.StyledBox>
      )}
    </Stack>
  );
};

UserCard.displayName = 'UserCard';
