import React from "react";
import styled from "styled-components";
import NotFound from "../../assets/groot.gif";

const SearchNotFound = () => {
  return (
    <Container>
      <Text className="notFoundLabel">
        Sorry... Couldn't find your search :(
      </Text>
      <Content>
        <Image src={NotFound} alt="Groot sad about search not found" />
      </Content>
    </Container>
  );
};

export default SearchNotFound;

const Container = styled.div`
  width: 100%;
  color: white;
`;
const Text = styled.h1`
  margin: 0 0 20px;
  font-size: 2.4rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;
const Content = styled.div``;

const Image = styled.img`
  width: 268px;
  height: 268px;
`;
