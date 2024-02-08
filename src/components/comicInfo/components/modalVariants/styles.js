import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import BgTeste from "../../../../assets/5.jpg";

const fade = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
    visibility: visible;
}
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  animation: ${fade} 0.4s;
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  background-image: url(${BgTeste});
  background-size: cover, auto;
  background-position: center;
  /* background-position-x: 100%; */
  background-repeat: no-repeat;
  background-color: #282a2d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 3.2rem;
  border-radius: 16px;
  width: 950px;
  line-height: 1.4;

  @media (max-width: 767px) {
    width: unset;
    line-height: 1;
    padding: 16px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  height: 450px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    opacity: 0.5;
    background-color: #413f42;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #7f8487;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const Close = styled.div`
  color: #ee171f;
  font-size: 1.125rem;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 0.875rem;
    right: 10px;
    top: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 16px;
`;

export const ImageContainer = styled(NavLink)`
  position: relative;
  width: 180px;
  border: solid #000;
  border-width: 3px 4px 3px 5px;
  margin-top: 1rem;
`;

export const ImageContent = styled.div`
  //adicionar efeito skeleton na cor antes de caregar img
  background: #1f2121;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  height: 270px;
  position: relative;
  width: 100%;
  transition: all 0.2s linear;
  transform: scaleX(1);

  ${ImageContainer}:hover & {
    transform: scale3d(1.05, 1.05, 1);
  }
`;
