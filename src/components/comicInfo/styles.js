import styled from "styled-components";
import { Link } from "react-router-dom";
import BgTeste from "../../assets/bgBlack.jpg";
import BgImage from "../../assets/SkyLinefinal.png";

export const Section = styled.section``;

export const Wrapper = styled.div`
  padding: 3rem 0;
  background-color: #fff;
  background-image: url(${BgTeste});
  background-size: cover, auto;
  background-position: center;
  background-repeat: no-repeat;

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
`;

export const BackgroundImage = styled.div`
  background-image: url(${BgImage}),
    /* #163c52 0%, */
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

  .splide {
    padding: 2rem 7rem;

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
      padding: 0 0 10px;
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

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-family: "Bangers", sans-serif;
  letter-spacing: 2px;
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.7px;

  > span {
    font-size: 1.6rem;
    font-weight: 300;
    display: block;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  margin: 0;
`;

export const Covers = styled.div`
  margin-top: 16px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 150px;

  > svg {
    margin-left: 3px;
  }
`;

export const Characters = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${(props) => (props.available > 6 ? "2rem" : "4rem")};
`;

export const Creators = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  gap: 0 5rem;
`;

export const Role = styled.li`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  text-transform: capitalize;
  margin: 0;
  padding: 0;

  &:not(:nth-child(-1n + 2)) {
    margin-top: 16px;
  }
`;
export const CreatorName = styled(Link)`
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

export const Text = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.4rem;
  margin: 0;

  > p {
    margin: 0;
    display: flex;
    align-items: center;
  }
  &:hover {
    text-decoration: underline;
    color: #ee171f;
  }
`;
