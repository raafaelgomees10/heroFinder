import styled from "styled-components";
import BgBlack from "../../assets/bgHome.webp";
import BgBallon from "../../assets/homeBallon.webp";

export const Section = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(27, 156, 209, 0.62),
      rgba(255, 215, 0, 0.73)
    ),
    url(${BgBlack});
  background-size: cover, auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1100px;
  min-height: calc(100vh - 16.6rem);
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 300px;
    justify-content: center;
    gap: 30px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 700px;
  }
`;

export const Box = styled.div`
  max-width: 600px;

  @media (max-width: 767px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.div`
  position: relative;
  max-width: 370px;
  font-size: 2.8rem;
  font-family: "Luckiest Guy", cursive;
  text-align: center;
  letter-spacing: 0.6px;
  -webkit-text-stroke: 0.7px black;
  margin-left: 30px;
  margin-top: 15px;

  @media (max-width: 820px) {
    max-width: 250px;
    margin-left: 10px;
    margin-top: 20px;
    font-size: 1.8rem;
  }

  @media (max-width: 350px) {
    max-width: 190px;
    margin: 0;
    font-size: 1.4rem;
  }
`;

export const Ballon = styled.div`
  width: 480px;
  height: 410px;

  background-image: url(${BgBallon});
  background-size: cover, auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    width: 320px;
    height: 250px;
  }

  @media (max-width: 350px) {
    background-image: unset;
    width: unset;
    height: unset;
  }
`;
export const Image = styled.img`
  display: block;
  width: 310px;
  height: 520px;
  border-bottom-right-radius: 32%;

  @media (max-width: 820px) {
    width: 280px;
    height: 480px;
  }

  @media (min-width: 821px) and (max-width: 1100px) {
    width: 280px;
    height: 480px;
  }

  @media (max-width: 350px) {
    width: 200px;
    height: unset;
  }

  @media (max-width: 200px) {
    width: unset;
    height: unset;
    display: none;
  }
`;
