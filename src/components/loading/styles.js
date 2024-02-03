import styled from "styled-components";
export const Section = styled.section``;

// export const Container = styled.div`
//   position: absolute;
//   top: 69px;
//   border: 1px solid red;
//   left: 45%;
//   color: #fff;
//   font-size: 24px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: calc(100vh - 69px);
// `;

// export const Content = styled.div`
//   background-color: #fff;
//   border-radius: 50%;
//   padding: 16px;
//   margin-bottom: 16px;
// `;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 69px;
  left: 0px;
  z-index: 1000;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 69px);
  background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  padding: 16px;
  margin-bottom: 16px;
`;
