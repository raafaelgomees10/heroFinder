import { Link } from "react-router-dom";
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

export const Nav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
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
`;

export const Links = styled(Link)`
  color: #fff;
`;
