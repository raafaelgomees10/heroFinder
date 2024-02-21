import styled, { css } from "styled-components";

export const Box = styled.div`
  width: 100%;
  max-width: 720px;

  ${(props) =>
    props.$isSquareImage &&
    css`
      max-width: 770px;
    `}
`;
