import React from "react";
import { Thanos } from "react-thanos";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DeadPoolGif from "../../assets/deadpool2.gif";

const Error = ({ error }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <Container>
      <Content>
        <Box>
          <Title>{error}</Title>
          <Text>
            Something is wrong. <br />
            The avengers advise you to return to the homepage
          </Text>
          <SubTitle>
            Click on the Infinity Gauntlet to return to the home page
          </SubTitle>
          <div onClick={handleClick}>
            <Thanos
              onSnap={() => handleClick()}
              onSnapReverse={() => handleClick()}
            />
          </div>
        </Box>
        <Image src={DeadPoolGif} alt="Deadpool fixing armor" />
      </Content>

      {/* <ImageBox>
            <ThanosImage
              src={ThanosSnap}
              alt="Thanos Snap"
              className={thanos ? "visible" : ""}
              loop="false"
            />
            <ThanosImage
              src={ThanosEyes}
              alt="Thanos Eyes"
              className={thanos ? "" : "visible"}
            />
          </ImageBox> */}
    </Container>
  );
};

export default Error;

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: #000;
`;

export const Content = styled.div`
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div`
  position: relative;
  z-index: 999;
  max-width: 600px;

  @media (max-width: 767px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #f31;
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const SubTitle = styled.span`
  font-size: 1.2rem;
`;

export const Image = styled.img`
  width: 380px;

  @media (max-width: 767px) {
    width: 250px;
  }
`;

// const ThanosImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   transition: opacity 2.5s ease-in-out;
//   opacity: ${({ className }) => (className === "visible" ? 1 : 0)};
// `;
