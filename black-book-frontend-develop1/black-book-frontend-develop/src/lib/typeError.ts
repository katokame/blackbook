import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { IError } from '../types';

export function isFetchBaseQueryError(
  error: FetchBaseQueryError<IError> | SerializedError,
): error is FetchBaseQueryError<IError> {
  if (!error) return false;

  if ('data' in error || 'error' in error) {
    return true;
  }

  return false;
}

export function isIError(error?: string | IError): error is IError {
  if (!error) return false;

  if (typeof error === 'string') return false;

  return true;
}

export function isErrorString(error: string | IError): error is string {
  if (!error) return false;

  if (typeof error === 'string') return true;

  return false;
}

export function isErrorWithMessage(
  error: FetchBaseQueryError<IError> | SerializedError,
): error is SerializedError {
  if (!error) return false;

  if ('message' in error) {
    return true;
  }
  return false;
}
