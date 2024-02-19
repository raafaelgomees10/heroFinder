import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #000;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: "Bangers", sans-serif;
  font-weight: 400;
  margin: 0;
`;
export const Teste = styled.div`
  padding: 40px;
  border: 3px solid red;
`;
export const Content = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;

  &.noSlide {
    margin: 20px 0;
    justify-content: flex-start;
    gap: 0 3rem;
  }
`;

export const Box = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  max-width: 170px;

  &:hover {
    transform: translate3d(0, -10px, 0);
  }
`;

export const Image = styled.img`
  width: 164px;
  height: 226px;
  box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.6);
`;
export const Name = styled.h3`
  font-size: 1.8rem;
  font-family: "Bangers", sans-serif;
  background-color: transparent;
  margin: 20px 0 0;
  font-weight: 400;
  color: #c0c0c0;
`;
