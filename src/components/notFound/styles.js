import styled from "styled-components";
import Rain from "../../assets/rain.gif";

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

export const BgRain = styled.div`
  width: 100%;
  background-color: red;
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
  font-size: 3.2rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
