import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: black;
  padding: 10px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div``;

export const Box = styled.div`
  display: block;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Nav = styled.nav`
  &.navMobile {
    display: block;
    position: absolute;
    top: 60px;
    right: 10px;
    padding: 0.1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    > a,
    > button {
      justify-content: flex-start;
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;
    }
    > button {
      border-bottom: none;
    }
  }

  &.navMobileActive {
    transition: all 0.3s ease 0s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    border-radius: 16px;
    background: #1b1d20;
    gap: 0;
    flex-direction: column;
    padding: 8px;
  }
`;

export const Li = styled.li`
  font-size: 1.8rem;
  margin: 0px 16px;
  transition: 0.3s;
  border-bottom: 2px solid black;

  &:hover,
  &:focus {
    border-radius: 2px;
    border-bottom: 2px solid red;
  }

  @media (max-width: 767px) {
    padding: 10px 20px;
    margin: 0 8px;
    &:hover,
    &:focus {
      border-radius: 2px;
      border: 1px solid #ee171f;
    }
  }
`;

export const Links = styled(NavLink)`
  color: #fff;
`;

export const MobileButton = styled.button`
  background: #1b1d20;
  border-radius: 0.2rem;
  height: 40px;
  color: #ee171f;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  padding: 0px;
  transition: 0.1s;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #ee171f;
    outline: none;
    border: 1px solid #ee171f;
  }

  &.active {
    border-color: #ee171f;
    background: #1b1d20;
  }
  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &:focus,
  &:hover,
  &.active {
    outline: none;
    border-color: #ee171f;
    color: #ee171f;
    background: #1b1d20;
  }

  &.active {
    &::after {
      transform: rotate(90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
`;
