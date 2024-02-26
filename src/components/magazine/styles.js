import styled, { css, keyframes } from "styled-components";

const shine = keyframes`
to {
    background-position-x: -200%;
  }
`;

const skeleton = css`
  background: #50535a;
  background: linear-gradient(90deg, #50535a 8%, #656871 18%, #50535a 33%);
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

export const Box = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: all 0.2s ease-in-out;

  margin-bottom: ${(props) => (props.$isHomePage ? "20px" : "0")};
  &:hover {
    transform: translate3d(0, -10px, 0);
  }

  ${(props) =>
    props.$isHomeLoading &&
    css`
      width: 224px;
      height: 336px;
      ${skeleton}
    `}
`;

export const Image = styled.img`
  width: ${(props) => (props.$isHomePage ? "224px" : "164px")};
  height: ${(props) => (props.$isHomePage ? "336px" : "226px")};
  box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  color: #fff;
  /* THIS IS FOR BEFORE IMAGE RENDER, SKELETON STYLE */
  ${skeleton}
`;

export const Name = styled.h3`
  font-size: 1.8rem;
  font-family: "Bangers", cursive;
  background-color: transparent;
  margin: 20px 0 0;
  font-weight: 400;
  color: #f2ecff;
  letter-spacing: 0.7px;
  width: ${(props) => (props.$isHomePage ? "220px" : "164px")};
  @media (max-width: 767px) {
    margin: 12px 0 0;
  }
`;
