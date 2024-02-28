import styled from "styled-components";
import Rain from "../../assets/rain.gif";
import BgPurple from "../../assets/bgPurple.webp";

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: url(${BgPurple});
  background-size: cover, auto;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 80px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1100px;
  min-height: calc(100vh - 16rem);
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    max-width: 300px;
    justify-content: center;
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 700px;
  }
`;

export const BgRain = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  height: 100%;
  background: url(${Rain});
  z-index: 1;
`;

export const Image = styled.img`
  width: 350px;

  @media (max-width: 767px) {
    width: 250px;
  }
  @media (max-width: 255px) {
    display: none;
  }
`;

export const Box = styled.div`
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
  font-size: 3.6rem;
  font-family: "Bangers", cursive;
  letter-spacing: 1px;
  -webkit-text-stroke: 0.8px black;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-family: cursive;
  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 16px;
  font-family: cursive;
  /* letter-spacing: 1px; */

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
