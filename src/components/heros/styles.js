import styled from "styled-components";
import BgTeste from "../../assets/bgBlack.jpg";

export const Section = styled.section`
  /* padding: 0 0 64px; */
`;
export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin: 3rem auto 0;

  @media (max-width: 767px) {
    max-width: 300px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 16px 37px;
  margin-top: 32px;
  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 24px;
  }
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
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Teste = styled.div`
  /* background-image: url(${BgTeste});
  background-size: cover, auto;
  background-position: top;
  background-repeat: no-repeat; */
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
