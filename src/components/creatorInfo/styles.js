import styled from "styled-components";
import { Link } from "react-router-dom";
import BgBlack from "../../assets/bgBlack.jpg";
import BgImage from "../../assets/SkyLinefinal.png";

export const Section = styled.section``;

export const Wrapper = styled.div`
  padding: 3rem 0;
  background-color: #fff;
  background-image: url(${BgBlack});
  background-size: cover, auto;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BackgroundImage = styled.div`
  background-image: url(${BgImage}),
    linear-gradient(
      to bottom,
      #163c52 0%,
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
  justify-content: flex-start;
  gap: 3rem;
`;

export const Image = styled.img`
  height: 550px;
  width: 350px;
  border: solid #000;
  border-width: 3px 4px 3px 5px;
`;

export const Box = styled.div`
  width: 100%;
`;

export const Details = styled.div`
  padding: 0.8rem 1.6rem;
  border: solid #000;
  border-width: 3px 4px 3px 5px;

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-family: "Bangers", sans-serif;
  letter-spacing: 3px;
`;

export const InfoList = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  gap: 0 2rem;
`;

export const LinkName = styled(Link)`
  font-size: 1.2rem;
  font-weight: 300;
  color: #fff;

  > span {
    &:hover {
      text-decoration: underline;
      color: #ee171f;
    }
  }
`;

export const Li = styled.li`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  text-transform: capitalize;
  margin: 8px 0;
  padding: 0;
`;
