import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  margin-top: 1rem;
  color: #000;
`;

export const Content = styled.div``;

export const Box = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, -10px, 0);
  }
`;

export const Image = styled.img`
  width: 224px;
  height: 336px;
  box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4);
`;
export const Title = styled.h3`
  /* text-align: center; */
  font-size: 1.8rem;
  font-family: "Bangers", sans-serif;
  background-color: transparent;
  margin: 20px 0 0;
  font-weight: 400;
  max-width: 215px;
`;
