import styled, { css } from "styled-components";
import BgBlack from "../assets/bgBlack.webp";
import bgBalls from "../assets/balls.svg";

export const Section = styled.section``;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 767px) {
    max-width: 300px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: 32px;

  ${(props) =>
    props.$isCards &&
    css`
      justify-content: flex-start;
      /* padding: 3rem auto; */
      gap: 16px 36px;
    `}

  ${(props) =>
    props.$total < 4 &&
    css`
      gap: 4rem;
      justify-content: flex-start;
    `}

  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  position: relative;
  height: 350px;
  /* object-fit: cover; */
  @media (max-width: 767px) {
    object-fit: cover;
    height: 300px;
  }
`;

export const Background = styled.div`
  background-image: url(${BgBlack});
  background-size: cover, auto;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 16rem);
  padding-bottom: 2rem;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  text-transform: uppercase;
  font-size: 3.4rem;
  font-family: "Bangers", cursive;
  letter-spacing: 2px;
  font-weight: 700;
  -webkit-text-stroke: 0.5px black;

  > span {
    text-transform: none;
    font-size: 1.8rem;
    font-weight: 300;

    font-family: "Luckiest Guy", cursive;
    letter-spacing: 1.3px;
    -webkit-text-stroke: 0.5px black;
    text-align: center;
  }

  @media (max-width: 767px) {
    text-align: center;
    font-size: 2.8rem;

    > span {
      margin-top: 8px;
      font-size: 1.4rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  z-index: 0;
`;

export const LoadMore = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  margin: 24px 0;

  text-align: center;
  font-family: "Dekko", cursive;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  background: url(${bgBalls}), #ffcd28;
  background-size: 12px, 100%;
  border: 4px solid #000;
  position: relative;
  transition: all 0.15s 0.15s ease-out;

  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 2px;
    width: 100%;
    height: 100%;
    background: #000;
    border: 4px solid #000;
    transition: all 0.15s 0.15s ease-out;
    z-index: -5;
  }

  &:hover {
    &::before {
      left: 0;
      bottom: 0px;
      top: -10px;
      left: 4px;
    }
  }
`;
