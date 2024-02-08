import styled, { keyframes } from "styled-components";

const fade = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
    visibility: visible;
}
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  animation: ${fade} 0.8s;
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282a2d;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  border-radius: 16px;
  width: 850px;
  line-height: 1.4;
  gap: 1.5rem;

  @media (max-width: 767px) {
    width: unset;
    line-height: 1;
    padding: 16px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const Close = styled.div`
  color: #8257e6;
  font-size: 1.125rem;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 0.875rem;
    right: 10px;
    top: 10px;
  }
`;

export const Image = styled.img`
  border-radius: 16px;
  max-width: unset;
  width: 450px;
  max-height: 275px;

  @media (max-width: 767px) {
    width: 330px;
    max-height: 205px;
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #8257e6;
  /* color: #994eec; */
  /* color: linear-gradient(#9b30f9, #8844ee); */
`;

export const Description = styled.p`
  color: #b0b2b3;
  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

export const Languages = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  align-self: flex-start;
`;

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;

  > p {
    text-transform: uppercase;
    margin-bottom: 8px;
    font-size: 0.875rem;
    max-width: 80px;
    color: #b0b2b3;
    @media (max-width: 767px) {
      font-size: 0.75rem;
    }
  }

  > img {
    flex-shrink: 0;
    flex-grow: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const Button = styled.a`
  display: flex;
  background: linear-gradient(
    rgba(130, 87, 230, 0.8) 0.2%,
    rgba(121, 48, 190, 0.648) 100%
  );
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 16px;
  color: #f9f9f9;
  border: none;
  padding: 6px 4px;
  width: 100px;
  text-decoration: none;
  font-size: 0.875rem;
`;
