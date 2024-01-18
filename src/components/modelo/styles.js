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
