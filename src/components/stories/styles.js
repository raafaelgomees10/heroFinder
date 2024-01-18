import styled from "styled-components";

export const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 0;
  /* border: 1px solid red; */

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
  align-items: center;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: 32px;
  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 24px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    justify-content: space-around;
  }
`;
