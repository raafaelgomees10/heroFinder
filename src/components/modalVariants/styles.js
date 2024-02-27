import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import BgModal from "../../assets/bgModal.jpg";

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
  background-image: url(${BgModal});
  background-size: cover, auto;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #282a2d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 3.2rem;
  border-radius: 16px;
  line-height: 1.4;
  max-width: 1080px;

  @media (max-width: 767px) {
    width: unset;
    line-height: 1;
    padding: 40px 16px;
  }
`;
export const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 16px;
`;
export const Box = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0;
  margin: 0;
  font-size: 1.4rem;
`;
export const Item = styled.li`
  max-width: 280px;
`;

export const VariantsLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
    color: #ee171f;
  }
`;

export const Close = styled.div`
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
