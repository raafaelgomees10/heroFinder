import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  position: relative;
  width: 190px;
  position: relative;
  margin-top: 1rem;
  box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4);

  &::after {
    border-color: transparent #121212 transparent transparent;
    border-style: solid;
    border-width: 12px 12px 0 0;
    bottom: 0;
    content: "";
    position: absolute;
    right: 0;
    top: auto;
    z-index: 40;
  }
`;

export const Content = styled.div`
  //adicionar efeito skeleton na cor antes de caregar img
  background: #2e2e2e;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
  position: relative;

  &::after {
    height: 4px;
    content: "";
    background-color: #e62429;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const Image = styled.img`
  height: 210px;
  position: relative;
  width: 100%;
  transition: all 0.2s linear;
  object-fit: cover;
  transform: scaleX(1);

  ${Container}:hover & {
    transform: scale3d(1.05, 1.05, 1);
  }
`;

export const Details = styled.div`
  word-break: break-word;
  padding: 16px 6px;
  font-size: 1.6rem;
  position: relative;
  height: 145px;
  width: 100%;
  background: #1f2121;
  transition: color 0.3s;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top center;
    background: #e62429;
    z-index: -1;
    transition: transform 0.5s;
  }

  ${Container}:hover & {
    &::after {
      transform: scaleY(1);
    }
  }
`;

export const Name = styled.p`
  color: #e6f5f4;
  margin: 0;
`;
