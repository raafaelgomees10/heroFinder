import React from "react";
import styled from "styled-components";
import ThanosGif from "../../assets/deadpool2.gif";

const Error = ({ error }) => {
  const formatError = JSON.parse(error);
  if (!error) {
    return null;
  }

  if (formatError.code === 429) {
    return (
      <Container>
        <Text dangerouslySetInnerHTML={{ __html: formatError.message }} />
        <img src={ThanosGif} alt="Thanos Snap" width="350px" height="350px" />
      </Container>
    );
  }

  return (
    <Container>
      <Text dangerouslySetInnerHTML={{ __html: formatError.message }} />
      <img
        src={ThanosGif}
        alt="Deadpool fixing armor"
        width="350px"
        height="350px"
      />
    </Container>
  );
};

export default Error;

const Text = styled.p`
  font-size: 2.6rem;
  color: #f31;
  margin: 1rem 0 6rem;
  max-width: 800px;
  text-align: center;
`;
const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
