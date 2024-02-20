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
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: ${(props) => (props.noImage ? "350px" : "550px")};
  width: 350px;
  border: solid #000;
  border-width: 3px 4px 3px 5px;

  @media (max-width: 767px) {
    height: 420px;
    width: 300px;
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 720px;
`;

export const Details = styled.div`
  padding: 1.6rem;
  border: solid #000;
  border-width: 3px 4px 3px 5px;
  color: #f2ecff;

  &:not(:first-of-type) {
    margin-top: 24px;
  }

  .splide {
    width: 100%;
    padding: ${(props) => (props.isCards ? "1.2rem 7rem" : "0 7rem 1.2rem")};

    @media (max-width: 767px) {
      padding: ${(props) => (props.isCards ? "1.2rem 5rem" : "0 5rem 0")};
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
      padding: ${(props) => (props.isCards ? "0 0 16px" : "12px 0")};
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

export const InfoList = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  gap: 0 2rem;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.available > 6 ? "2rem" : "4rem")};
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
