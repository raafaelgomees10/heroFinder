import React, { useState } from "react";
import { Thanos } from "react-thanos";
import styled from "styled-components";
import InfinityGauntlet from "react-thanos-snap";
import ThanosSnap from "../../assets/thanosSnap.gif";
import ThanosEyes from "../../assets/thanosEyes.gif";
import DeadPoolGif from "../../assets/deadpool2.gif";

const Error = ({ error }) => {
  const [snap, setSnap] = useState(false);
  const [thanos, setThanos] = useState(true);

  const toggleThanos = () => {
    setThanos(!thanos);
  };

  return (
    <Container>
      <Text dangerouslySetInnerHTML={{ __html: error }} />

      <div>
        <InfinityGauntlet snap={snap}>
          <img
            src={DeadPoolGif}
            alt="Deadpool fixing armor"
            width="350px"
            height="350px"
          />
        </InfinityGauntlet>
      </div>

      <Content>
        <ThanosDiv onClick={toggleThanos}>
          <Thanos
            onSnapReverse={() => setSnap(false)}
            onSnap={() => setSnap(true)}
          />
        </ThanosDiv>

        <ImageBox>
          <ThanosImage
            src={ThanosSnap}
            alt="Thanos Snap"
            className={thanos ? "visible" : ""}
          />
          <ThanosImage
            src={ThanosEyes}
            alt="Thanos Eyes"
            className={thanos ? "" : "visible"}
          />
        </ImageBox>
      </Content>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  padding: 30px 0;
  background-color: #000;
  width: 1100px;
  margin: auto;
`;

const Text = styled.p`
  font-size: 2.4rem;
  color: #f31;
  margin: 0 auto 4rem;
  max-width: 800px;
  text-align: center;
`;

const Content = styled.div`
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
`;

const ThanosDiv = styled.div`
  z-index: 999;
  position: relative;
`;

const ImageBox = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

const ThanosImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 2.5s ease-in-out;
  opacity: ${({ className }) => (className === "visible" ? 1 : 0)};
`;
