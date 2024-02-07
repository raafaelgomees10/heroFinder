import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  color: #000;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  height: 100%;

  .splide {
    width: 100%;
    padding: 0 3em;

    &__slide {
      width: unset !important;
      margin-right: 5rem !important;
    }
    &__track {
      padding: 16px 0 10px;
    }

    &__arrow {
      > svg {
      }
      &--prev {
        left: -3rem !important;
      }
      &--next {
        right: -1rem !important;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: "Bangers", sans-serif;
  font-weight: 400;
  margin: 0;
`;

export const Box = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, -10px, 0);
  }
`;

export const Image = styled.img`
  width: 224px;
  height: 336px;
  box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4);
`;
export const Name = styled.h3`
  /* text-align: center; */
  font-size: 1.8rem;
  font-family: "Bangers", sans-serif;
  background-color: transparent;
  margin: 20px 0 0;
  font-weight: 400;
  max-width: 215px;
`;
