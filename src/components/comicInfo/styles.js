import styled from "styled-components";
import { Link } from "react-router-dom";

export const Infos = styled.h3`
  font-size: 2rem;
  font-weight: 600;

  > span {
    font-size: 1.6rem;
    font-weight: 300;
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
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 150px;

  > svg {
    margin-left: 3px;
  }
`;

export const SerieName = styled(Link)`
  text-decoration: none;
  color: #f2ecff;
  font-size: 1.4rem;
  margin: 0;

  > p {
    margin: 0;
    display: flex;
    align-items: center;
  }
  &:hover {
    text-decoration: underline;
    color: #ee171f;
  }
`;
