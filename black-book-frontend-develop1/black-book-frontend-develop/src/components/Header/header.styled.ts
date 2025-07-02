import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack, TextField, styled } from '@mui/material';

import { THEMES } from '../../design-tokens';

const StyledHeader = styled(Stack)(({ theme }) => ({
  zIndex: '1',
  position: 'fixed',
  backgroundColor: `${THEMES.colors.dark}`,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 20px',

  [theme.breakpoints.up('lg')]: {
    padding: '20px',
  },
}));

const StyledInputContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: `${THEMES.colors.light}`,
  borderRadius: `${THEMES.radiuses.medium}`,
  flexDirection: 'row',
  alignItems: 'center',
  flexGrow: '1',
  maxWidth: '100%',
  padding: '2px 12px 2px 20px',
  height: '50px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '610px',
  },
}));

const StyledInput = styled(TextField)({
  color: `${THEMES.colors.dark}`,
  fontSize: `${THEMES.spacings.sm}`,

  '& .MuiInputBase-input': {
    padding: '0',
  },

  '& .MuiInputBase-input::placeholder': {
    color: `${THEMES.colors.text}`,
    fontSize: `${THEMES.spacings.xs}`,
    opacity: '0.5',
  },
  '& .MuiFormHelperText-root': {
    color: `${THEMES.colors.error}`,
    fontSize: `${THEMES.spacings.xs}`,
    margin: '0',
  },
  '& .MuiInput-underline:before': {
    borderBottom: `1px solid ${THEMES.colors.main}`,
  },
  '& .MuiInput-underline:after': {
    borderBottom: `1px solid ${THEMES.colors.text}`,
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: `1px solid ${THEMES.colors.text}`,
  },
});

const StyledIconButton = styled(IconButton)`
  padding: 6px;
`;

const StyledIcon = styled(SearchIcon)`
  color: ${THEMES.colors.main};
`;

export const Styled = {
  StyledHeader,
  StyledInputContainer,
  StyledInput,
  StyledIconButton,
  StyledIcon,
};
