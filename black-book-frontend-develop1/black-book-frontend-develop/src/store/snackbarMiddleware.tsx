import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {
  Middleware,
  SerializedError,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { closeSnackbar, enqueueSnackbar } from 'notistack';

import { getErrorMessage } from '../lib/getErrorMessage';
import { IError } from '../types';

export const snackbarMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errorMessage = getErrorMessage(
      action.payload as SerializedError | FetchBaseQueryError<IError>,
    );

    enqueueSnackbar(errorMessage, {
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
    });
  }
  return next(action);
};
