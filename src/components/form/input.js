import React from "react";
import styled from "styled-components";

const Input = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
}) => {
  return (
    <Content>
      <Label htmlFor={name}>{label}</Label>
      <InputForm
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Content>
  );
};

export default Input;

const Content = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

const InputForm = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: 0.2s;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`;

const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
