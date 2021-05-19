import React from 'react'
import IconMagnifier from '../UI/Icons/IconMagnifier'
import { SearchBarContainer, InputWrapper, IconWrapper, Input, Button } from './styled'
type SearchBarProps = {
  value: string | number
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDownHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SearchBar = ({ value, onChangeHandler, onKeyDownHandler, onClickHandler }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <InputWrapper>
        <IconWrapper htmlFor="search" aria-labelledby="searchTitle">
          <IconMagnifier fill="var(--light-grey)" />
        </IconWrapper>
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Search for free Pexels Photos"
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          autoComplete="off"
        />
        <Button onClick={onClickHandler} type="submit">
          Search
        </Button>
      </InputWrapper>
    </SearchBarContainer>
  )
}

export default SearchBar
