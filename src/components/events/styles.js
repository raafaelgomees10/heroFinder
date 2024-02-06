import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  color: #000;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: "Bangers", sans-serif;
  font-weight: 400;
  margin: 0 0 24px;
`;

export const Event = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, -10px, 0);
  }
`;
export const Image = styled.img`
  width: 224px;
  height: 336px;
`;
