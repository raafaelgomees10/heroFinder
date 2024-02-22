import styled, { css } from "styled-components";

export const Section = styled.section``;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 767px) {
    max-width: 300px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 24px;
  }

  ${(props) =>
    props.$total < 4 &&
    css`
      gap: 4rem;
      justify-content: flex-start;
    `}
`;

export const Image = styled.img`
  width: 100%;
  position: relative;
  height: 350px;
  /* object-fit: cover; */
  @media (max-width: 767px) {
    object-fit: cover;
    height: 300px;
  }
`;

export const Background = styled.div`
  background: #121212;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  text-transform: uppercase;
  font-size: 3.4rem;
  font-family: "Roboto";
  font-weight: 700;

  > span {
    text-transform: none;
    font-size: 1.8rem;
    font-weight: 300;
  }

  @media (max-width: 767px) {
    text-align: center;
    font-size: 2.4rem;
    > span {
      margin-top: 8px;
      font-size: 1.6rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMore = styled.button`
  background-color: #ee171f;
  color: #fff;
  padding: 8px 16px;
  font-size: 1.4rem;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 24px 0 0;

  &:hover {
    background-color: #c4161c;
  }
`;
