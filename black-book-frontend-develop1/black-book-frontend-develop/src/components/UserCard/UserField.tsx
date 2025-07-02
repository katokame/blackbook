import { Stack } from '@mui/material';

import { Styled } from './userCard.styled';

type UserFielsProps = {
  label: string;
  value: string;
};

export const UserField: React.FC<UserFielsProps> = ({ label, value }) => (
  <Stack>
    <Styled.StyledText variant='subtitle1'>{label}</Styled.StyledText>
    <Styled.StyledText variant='body1'>{value}</Styled.StyledText>
  </Stack>
);

UserField.displayName = 'UserField';
