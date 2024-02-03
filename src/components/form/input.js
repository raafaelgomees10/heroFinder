import React from "react";
import styled from "styled-components";
import Search from "../../assets/search.svg";

const Input = ({
  label,
  name,
  type,
  value,
  error,
  onBlur,
  onChange,
  onKeyDown,
  placeholder,
}) => {
  return (
    // <Content>
    //   <Label htmlFor={name}>{label}</Label>
    //   <InputForm
    //     id={name}
    //     name={name}
    //     type={type}
    //     placeholder={placeholder}
    //     value={value}
    //     onChange={onChange}
    //     onBlur={onBlur}
    //   />
    //   {error && <Error>{error}</Error>}
    // </Content>

    <Container>
      <NewInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const NewInput = styled.input`
  width: 100%;
  border-radius: 4px;
  font-size: 2rem;
  background-image: url(${Search});
  background-position: 5px 9px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 44px;
  outline: none;
  border: none;
  background-color: #000;
  border: 1px solid black;
  border-bottom-color: #ee171f;
  color: #fff;

  &:focus {
    outline: none;
    border: 1px solid #ee171f;
  }
`;

const Content = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

const InputForm = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1.6rem;
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

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
