import styled, { css } from "styled-components";
import BgImage from "../../assets/Sky.png";
import BgBlack from "../../assets/bgBlack.jpg";
import BgImageMobile from "../../assets/SkyMobile.png";

export const Section = styled.section`
  padding: 0;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  padding: 3rem 0;
  background-color: #fff;
  background-image: url(${BgBlack});
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

  @media (max-width: 767px) {
    flex-direction: column;
  }
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
  color: #f2ecff;
  margin: 0;
  letter-spacing: 1.1px;

  @media (max-width: 767px) {
    font-size: 2.8rem;
    /* text-align: center; */
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-family: "Bangers", sans-serif;
  color: #f2ecff;
  letter-spacing: 2px;
  @media (max-width: 767px) {
    font-size: 1.4rem;
    /* text-align: center; */
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 300px;
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

export const Details = styled.div`
  padding: 1.6rem;
  border: solid #000;
  border-width: 3px 4px 3px 5px;

  &:not(:first-of-type) {
    margin-top: 24px;
  }

  .splide {
    width: 100%;
    padding: 0 7rem 1.2rem;

    @media (max-width: 767px) {
      padding: 0 5rem;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      padding: 0 4rem;
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
          fill: #eb474d !important;
        }
      }
    }
  }
`;
export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.available > 6 ? "2rem" : "4rem")};
`;

export const Title = styled(Name)`
  font-size: 4rem;
`;
