import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventPeriod = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const Dates = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.7px;

  > span {
    font-weight: 300;
    display: block;
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

  > svg {
    transform: ${(props) => props.$prev && "rotate(180deg)"};
    margin: ${(props) => (props.$prev ? "0 3px 0 0" : "0 0 0 3px")};
  }
  &:hover {
    text-decoration: underline;
    color: #ee171f;
  }

  @media (max-width: 1199px) {
    font-size: 1.2rem;
  }
`;
