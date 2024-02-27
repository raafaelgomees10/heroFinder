import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventPeriod = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const Dates = styled.div`
  font-size: 1.6rem;

  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1.3px;
  -webkit-text-stroke: 0.5px black;

  > span {
    display: block;
    font-family: cursive;
    letter-spacing: 1px;
    font-weight: 300;
    -webkit-text-stroke: 0;
  }

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const EventsButtons = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled(Link)`
  color: #fff;
  border-radius: 16px;
  justify-content: center;
  margin-top: 16px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1.3px;
  font-weight: 300;
  -webkit-text-stroke: 0.8px black;

  > svg {
    transform: ${(props) => props.$prev && "rotate(180deg)"};
    margin: ${(props) => (props.$prev ? "0 3px 0 0" : "0 0 0 3px")};
  }
  &:hover {
    text-decoration: underline;
    -webkit-text-stroke: 0;
    color: #ee171f;
  }

  @media (max-width: 1199px) {
    font-size: 1.2rem;
  }
`;
