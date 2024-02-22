import styled from "styled-components";
export const Section = styled.section``;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  z-index: 1000;
`;

export const Content = styled.div`
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  padding: 16px;
  margin-bottom: 16px;
  > svg {
    width: 96px;
    max-height: 120px;
  }
`;
