import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  padding: 10px;
  border-radius: 6px;
  background-color: #f7f5e6;
  margin-bottom: 20px;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease;
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  border-radius: 6px;
  padding: 4px;
  border: 1px solid #c4c7ca;
  border-radius: 0.25rem;
  height: 280px;
  width: 275px;
`;

export const Details = styled.div`
  max-width: 240px;
  word-break: break-word;
  padding: 16px 16px 0;
`;
export const Name = styled.p`
  color: #000;
`;
export const Id = styled.p`
  color: #000;
`;
