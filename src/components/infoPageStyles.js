import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import BgImage from "../assets/Sky.webp";
import BgBlack from "../assets/bgBlack.webp";
import BgImageMobile from "../assets/SkyMobile.webp";

export const Section = styled.section``;

export const BackgroundImage = styled.div`
  background-size: contain, auto;
  background-position: bottom;
  background-repeat: repeat-x;
  min-height: 200px;
  background-image: url(${BgImage}),
    linear-gradient(
      to bottom,
      #163c52 0%,
      #4f4f47 30%,
      #c5752d 60%,
      #b7490f 80%,
      #2f1107 100%
    );

  @media (max-width: 767px) {
    background-image: url(${BgImageMobile}),
      linear-gradient(
        to bottom,
        #163c52 0%,
        #4f4f47 30%,
        #c5752d 60%,
        #b7490f 80%,
        #2f1107 100%
      );
  }
`;

export const Wrapper = styled.div`
  padding: 3rem 0;
  background-image: url(${BgBlack});
  background-size: cover, auto;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 16rem);
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto 24px;

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

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  border: solid #000;
  border-width: 3px 4px 3px 5px;

  height: 550px;
  width: 350px;

  @media (max-width: 767px) {
    height: 420px;
    width: 300px;
  }
  @media (max-width: 300px) {
    height: 300px;
    width: 200px;
  }

  @media (max-width: 199px) {
    display: none;
  }

  ${(props) =>
    props.$isSquareImage &&
    css`
      height: 300px;
      width: 300px;

      @media (max-width: 767px) {
        height: 300px;
        width: 300px;
      }

      @media (max-width: 300px) {
        height: 200px;
        width: 200px;
      }
    `}
`;

export const Box = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: "Bangers", cursive;
  font-weight: 400;
  letter-spacing: 1.1px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 2.8rem;
    /* text-align: center; */
  }

  ${(props) =>
    props.$isCharacters &&
    css`
      font-size: 5rem;
    `}
`;

export const SubTitle = styled(Title)`
  font-size: 4rem;

  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  margin: 20px 0;
  letter-spacing: 1.5px;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const Details = styled.div`
  padding: 1.6rem;
  border: solid #000;
  border-width: 3px 4px 3px 5px;
  color: #f2ecff;
  width: 100%;

  &:not(:first-of-type) {
    margin-top: 24px;
  }

  .splide {
    width: 100%;
    padding: ${(props) => (props.$isCards ? "1.2rem 7rem" : "0 7rem 1.2rem")};

    @media (max-width: 767px) {
      padding: ${(props) => (props.$isCards ? "1.2rem 5rem" : "0 5rem 0")};
    }

    &__pagination {
      bottom: 0px;
    }

    &__pagination__page {
      &:hover {
        background: #e62429;
      }
      &.is-active {
        background: #e62429;
        &:hover {
          background: #eb474d;
        }
      }
    }

    &__track {
      padding: ${(props) => (props.$isCards ? "0 0 16px" : "12px 0")};
    }

    &__arrow {
      > svg {
        fill: #e62429;

        &:hover {
          fill: #eb474d;
        }
      }
    }
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  gap: 4rem;
  padding: ${(props) => (props.$total <= 5 ? "12px 16px" : "0")};

  @media (max-width: 767px) {
    padding: 0;

    ${(props) =>
      props.$total === 1 &&
      css`
        padding-top: 12px;
        justify-content: center;
      `}
  }
`;

export const Creators = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  gap: 0 5rem;
`;

export const CreatorRole = styled.li`
  font-size: 1.8rem;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1px;
  -webkit-text-stroke: 0.4px black;

  &:not(:nth-child(-1n + 2)) {
    margin-top: 16px;
  }
`;

export const CreatorName = styled(Link)`
  font-size: 1.4rem;
  font-weight: 300;
  color: #fff;
  -webkit-text-stroke: 0;

  > span {
    font-family: cursive;
    letter-spacing: 0.8px;

    &:hover {
      text-decoration: underline;
      -webkit-text-stroke: 0;
      color: #ee171f;
    }
  }
`;

/* color: #000;
  padding: 0px;
  background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 100% 100%;
  margin-bottom: -4px;

  background-image: radial-gradient(
      ellipse farthest-corner,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 35%,
      #ffffff 30%,
      #ffffff 40%,
      rgba(0, 0, 0, 0) 90%
    ),
    radial-gradient(
      ellipse farthest-corner at 0px 0px,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 20%,
      #ffffff 15%,
      #ffffff 20%,
      rgba(0, 0, 0, 0) 50%
    ),
    radial-gradient(
      ellipse farthest-corner at 8px 8px,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 20%,
      #ffffff 15%,
      #ffffff 20%,
      rgba(0, 0, 0, 0) 50%
    ),
    radial-gradient(
      ellipse farthest-corner at 0px 8px,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 20%,
      #ffffff 15%,
      #ffffff 20%,
      rgba(0, 0, 0, 0) 40%
    ),
    radial-gradient(
      ellipse farthest-corner at 8px 0px,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 20%,
      #ffffff 15%,
      #ffffff 20%,
      rgba(0, 0, 0, 0) 50%
    ),
    linear-gradient(
      40deg,
      #484848 0,
      #959595 30%,
      #acacac 50%,
      #959595 70%,
      #484848 100%
    ); */
