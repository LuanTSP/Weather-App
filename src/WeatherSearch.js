import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

function WeatherSearch({handleClick, handleChange}) {
  
  return (
    <Container>
      <SearchInput onChange={handleChange} id={"#searchInput"} placeholder="City Name: "/>
      <SearchButton onClick={handleClick}>
        <FaSearch />
      </SearchButton>
    </Container>
  )
}

export { WeatherSearch }

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 1rem;

  display: flex;
  align-items: center;
`

const SearchInput = styled.input`
  width: calc(80% - 1rem);
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  border: none;
  flex-grow: 1;
`

const SearchButton = styled.button`
  height: 100%;
  min-width: 60px;

  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.secondary};
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 3px 3px black;
  transition: background-color 100ms ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.text};
  }
`