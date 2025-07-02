import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { IError } from '../types';
import {
  isErrorString,
  isErrorWithMessage,
  isFetchBaseQueryError,
  isIError,
} from './typeError';

export const getErrorMessage = (
  error?: FetchBaseQueryError<IError> | SerializedError,
): string => {
  if (error) {
    if (isErrorWithMessage(error)) {
      return error.message || 'Неизвестная ошибка';
    }
    if (isFetchBaseQueryError(error)) {
      if (isIError(error.data)) {
        return error.data.message;
      }
      if ('error' in error && isErrorString(error.error)) {
        return error.error;
      }
    }
  }

  return 'Неизвестная ошибка';
};
