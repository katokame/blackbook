import {
  Button,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { THEMES } from '../../design-tokens';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  height: 'calc(100vh - 186px)',
  overflow: 'auto',
  position: 'relative',

  [theme.breakpoints.up('lg')]: {
    height: 'calc(100vh - 210px)',
  },
}));

const StyledTable = styled(Table)({
  tableLayout: 'fixed',
  width: '100%',
  border: 'none',
});

const StyledTableRow = styled(TableRow)({
  '&:hover': {
    cursor: 'pointer',
  },
});

const CardsContainer = styled('div')(({ theme }) => ({
  minWidth: '460px',

  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  },
}));

const CardContainer = styled(TableContainer)({
  borderRadius: `${THEMES.radiuses.small}`,
  border: `1px solid ${THEMES.colors.dark}`,
  cursor: 'pointer',
});

const CardTableRow = styled(TableRow)({
  '& th:first-of-type': {
    width: '40%',
    backgroundColor: `${THEMES.colors.dark}`,
    color: `${THEMES.colors.light}`,
    padding: '8px',
    textAlign: 'right',
    borderBottom: 'none',
    position: 'relative',
  },

  '&:not(:last-child) th:first-of-type::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: '3%',
    left: '3%',
    width: '94%',
    height: '1px',
    backgroundColor: `${THEMES.colors.light}`,
  },

  '& td:first-of-type': {
    backgroundColor: `${THEMES.colors.light}`,
    color: `${THEMES.colors.dark}`,
    padding: '8px',
    textAlign: 'left',
    borderBottom: 'none',
    position: 'relative',
  },

  '&:not(:last-child) td:first-of-type::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: '3%',
    left: '3%',
    width: '94%',
    height: '1px',
    backgroundColor: `${THEMES.colors.main}`,
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: `${THEMES.spacings.xs}`,
  textAlign: 'center',
  borderBottom: `1px solid ${THEMES.colors.main}`,
  lineHeight: '100%',

  [theme.breakpoints.up('lg')]: {
    fontSize: `${THEMES.spacings.sm}`,
  },

  '&.MuiTableCell-head': {
    background: `${THEMES.colors.dark}`,
    color: `${THEMES.colors.light}`,
    padding: '13px 10px ',
    borderBottom: 'none',

    ':first-of-type': {
      borderTopLeftRadius: `${THEMES.radiuses.medium}`,
    },

    '&:last-of-type': {
      borderTopRightRadius: `${THEMES.radiuses.medium}`,
    },

    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: '12%',
      bottom: '12%',
      width: '1px',
      backgroundColor: `${THEMES.colors.light}`,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: `${THEMES.spacings.sm}`,
      padding: '13px 20px',
    },
  },

  '&.MuiTableCell-body': {
    background: `${THEMES.colors.light}`,
    color: `${THEMES.colors.dark}`,
    padding: '10px 7px',

    [theme.breakpoints.up('lg')]: {
      fontSize: `${THEMES.spacings.sm}`,
      padding: '13px 20px',
    },
    '&[component="th"]': {
      background: `${THEMES.colors.dark}`,
      color: `${THEMES.colors.light}`,
      padding: '13px 10px ',
      borderBottom: 'none',
    },
  },
}));

const ButtonTableCell = styled(TableCell)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: `${THEMES.colors.dark}`,
  borderColor: `${THEMES.colors.dark}`,
  padding: '4px',
  fontSize: '13px',

  [theme.breakpoints.up('lg')]: {
    padding: '4px 10px',
  },
}));

export const Styled = {
  StyledTableRow,
  StyledTableCell,
  StyledTableContainer,
  CardsContainer,
  StyledTable,
  StyledButton,
  CardContainer,
  CardTableRow,
  ButtonTableCell,
};
