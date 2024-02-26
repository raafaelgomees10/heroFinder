import styled from "styled-components";
import BgBlack from "../../assets/bgHome.png";
import BgBallon from "../../assets/homeBallon.png";

export const Wrapper = styled.div`
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

export const Section = styled.section``;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 820px) {
    max-width: 300px;
  }

  @media (min-width: 821px) and (max-width: 1199px) {
    max-width: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  /* flex-wrap: wrap; */

  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Box = styled.div``;

export const New = styled.div`
  position: relative;
`;

export const Text = styled.div`
  position: relative;
  max-width: 350px;
  font-size: 3.2rem;
  font-family: "Bangers", sans-serif;
  text-align: center;

  @media (max-width: 820px) {
    max-width: 250px;
    font-size: 1.9rem;
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
`;
export const Image = styled.img`
  display: block;
  width: 380px;
  height: 580px;

  @media (max-width: 820px) {
    width: 280px;
    height: 480px;
  }

  @media (min-width: 821px) and (max-width: 1100px) {
    width: 280px;
    height: 480px;
  }
`;
