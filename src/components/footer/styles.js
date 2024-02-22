import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Footer = styled.footer`
  font-size: 2rem;
  padding: 16px 64px;
  background: #1d1d1d;
  color: #a5a5a5;

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  ${(props) =>
    props.$column &&
    css`
      justify-content: flex-start;
      flex-direction: column;

      @media (max-width: 767px) {
        margin-top: 16px;
      }
    `}
`;

export const Icons = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-self: flex-start;

  @media (max-width: 767px) {
    align-self: center;
  }
`;

export const Icon = styled.li`
  display: flex;
  align-items: center;
  margin-right: 16px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const Divider = styled.div`
  background: #a5a5a5;
  width: 1.2px;
  margin: 0 12px 0 20px;
  height: 60px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 8px 0 0;
`;

export const Li = styled.li`
  font-size: 1.2rem;
  margin-right: 16px;
  @media (max-width: 767px) {
    padding: 0;
    margin: 0 8px;
  }
`;

export const Links = styled(NavLink)`
  color: #a5a5a5;

  transition: color 0.5s;
  position: relative;

  &.active {
    &::after {
      width: 100%;
      height: 0.1rem;
      background-color: #ee171f;
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      transition: width 0.5s;
    }
  }

  &:after {
    content: "";
    width: 0%;
    height: 0.1rem;
    background-color: #ee171f;
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    transition: width 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;

  > a {
    color: #a5a5a5;

    &:hover {
      color: #8257e6;
    }
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;
