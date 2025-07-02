import WestIcon from '@mui/icons-material/West';
import { Box, Stack, Typography, styled } from '@mui/material';

import { THEMES } from '../../design-tokens';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '8px',
  border: `1px solid ${THEMES.colors.main}`,
  borderRadius: `${THEMES.radiuses.medium}`,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',

  [theme.breakpoints.up('md')]: {
    minWidth: '700px',
    maxWidth: '80%',
    padding: '24px',
    gap: '24px',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '60%',
    padding: '40px',
    gap: '30px',
  },
}));

const ContentContainer = styled(Stack)(({ theme }) => ({
  gap: '16px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: '40px',
  },

  [theme.breakpoints.up('lg')]: {
    gap: '80px',
  },
}));

const ContentBox = styled(Stack)(({ theme }) => ({
  gap: '16px',

  [theme.breakpoints.up('lg')]: {
    gap: '24px',
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-subtitle1': {
    fontSize: `${THEMES.spacings.xs}`,

    [theme.breakpoints.up('md')]: {
      fontSize: `${THEMES.spacings.sm}`,
    },
  },

  '&.MuiTypography-body1': {
    fontSize: `${THEMES.spacings.sm}`,
    fontWeight: 'bold',
    letterSpacing: '0.5px',

    [theme.breakpoints.up('md')]: {
      fontSize: `${THEMES.spacings.md}`,
    },
  },
}));

const StyledIcon = styled(WestIcon)`
  color: ${THEMES.colors.dark};
`;

export const Styled = {
  StyledBox,
  StyledText,
  ContentContainer,
  StyledIcon,
  ContentBox,
};
