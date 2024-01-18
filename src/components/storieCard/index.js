import React from "react";
import * as S from "./styles";

const StorieCard = ({ data }) => {
  console.log("data.", data.thumbnail);
  return (
    <S.Container>
      <S.Image src={`${data.thumbnail}`} alt="Groot" />
      <S.Details>
        <S.Name>Titulo: {data.title}</S.Name>
        <S.Id>ID: {data.id}</S.Id>
      </S.Details>
    </S.Container>
  );
};

export default StorieCard;
