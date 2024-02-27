import styled from "styled-components";
import { Link } from "react-router-dom";

export const Infos = styled.h3`
  font-size: 2rem;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1.3px;
  -webkit-text-stroke: 0.5px black;

  > span {
    font-size: 1.6rem;
    font-family: cursive;
    letter-spacing: 1px;
    font-weight: 300;
    -webkit-text-stroke: 0;
    display: block;
  }

  @media (max-width: 1199px) {
    font-size: 1.8rem;

    > span {
      font-size: 1.4rem;
    }
  }
`;

export const Covers = styled.div`
  margin-top: 16px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 170px;
  font-family: "Bangers", cursive;
  letter-spacing: 0.8px;
  -webkit-text-stroke: 0.5px black;

  > svg {
    margin-left: 6px;
  }
`;

export const SerieName = styled(Link)`
  text-decoration: none;
  color: #f2ecff;
  font-size: 1.6rem;
  margin: 0;

  > p {
    margin: 0;
    display: flex;
    align-items: center;
    font-family: "Luckiest Guy", cursive;
    letter-spacing: 1px;
    font-weight: 300;
    -webkit-text-stroke: 0.8px black;

    > svg {
      margin-left: 4px;
    }
  }
  &:hover {
    text-decoration: underline;
    -webkit-text-stroke: 0;
    color: #ee171f;
  }
`;
