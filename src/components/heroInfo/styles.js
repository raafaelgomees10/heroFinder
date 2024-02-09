import styled from "styled-components";
import BgImage from "../../assets/SkyLinefinal.png";
import BgTeste from "../../assets/bgBlack.jpg";

export const Section = styled.section`
  padding: 0;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  padding: 3rem 0;
  background-color: #fff;
  background-image: url(${BgTeste});
  background-size: cover, auto;
  background-position: center;
  background-repeat: no-repeat;
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
  gap: 4rem;
`;

export const BackgroundImage = styled.div`
  background-image: url(${BgImage}),
    /* #163c52 0%, */
      linear-gradient(
        to bottom,
        #121212 0%,
        #4f4f47 30%,
        #c5752d 60%,
        #b7490f 80%,
        #2f1107 100%
      );
  background-size: contain, auto;
  background-position: bottom;
  background-repeat: repeat-x;
  min-height: 200px;
`;

export const Box = styled.div`
  border: solid #000;
  border-width: 3px 4px 3px 5px;
  width: 100%;
  color: black;
  padding: 16px;
`;

export const Name = styled.h1`
  font-size: 5rem;
  font-family: "Bangers", sans-serif;
  font-weight: 400;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-family: "Bangers", sans-serif;
  letter-spacing: 2px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 300px;

  border: solid #000;
  border-color: #000;
  border-width: 3px 4px 3px 5px;
`;

export const Events = styled.div`
  width: 300px;
  border: solid red;
  border-color: red;
  border-width: 3px 4px 3px 5px;
  height: 200px;
`;
