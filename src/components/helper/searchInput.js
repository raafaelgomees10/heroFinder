import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/search.svg";

const SearchInput = ({
  id,
  label,
  name,
  type,
  value,
  error,
  onBlur,
  onClick,
  onChange,
  onKeyDown,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>
        <Icon />
      </Button>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        autoComplete="off"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 5.125rem;
  padding: 0 8px;
  /* box-shadow: 0 0 4px #ee171f; */
  display: flex;
  align-items: center;
  background-color: #121212;
  color: #fff;
  border: 1px solid transparent;
  border-bottom-color: #ee171f;
  transition: all 0.2s ease;
  &:focus-within {
    border-color: #ee171f;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  font-size: 2rem;
  width: 100%;
  margin-left: 16px;
  color: #fff;

  &:focus {
    outline: none;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  &:focus,
  &:focus-visible {
    border: none;
    outline-color: #ee171f;
  }
`;