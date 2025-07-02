import React from 'react';

import { Styled } from './header.styled';

type HeaderProps = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleSearch: () => void;
  error: boolean;
};

export const Header = React.memo(
  ({ inputRef, handleSearch, error }: HeaderProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };

    return (
      <Styled.StyledHeader>
        <Styled.StyledInputContainer>
          <Styled.StyledInput
            placeholder='Введите запрос'
            fullWidth
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
            error={error}
            helperText={error && 'Запрос содержит недопустимые символы.'}
            variant='standard'
          />
          <Styled.StyledIconButton onClick={handleSearch}>
            <Styled.StyledIcon />
          </Styled.StyledIconButton>
        </Styled.StyledInputContainer>
      </Styled.StyledHeader>
    );
  },
);

Header.displayName = 'Header';
