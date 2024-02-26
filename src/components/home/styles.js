import styled from "styled-components";
import BgBlack from "../../assets/bgHome.png";
import BgBallon from "../../assets/homeBallon.png";

export const Section = styled.section`
  background: #eb01a5;
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
  max-width: 1100px;
  margin: 0 auto;

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

  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 24px;
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
`;

export const Ballon = styled.div`
  background-image: url(${BgBallon});
  background-size: cover, auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 480px;
  height: 410px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  display: block;
  width: 400px;
  height: 625px;
`;
