import React from "react";
import * as S from "./styles";

const CreatorCard = ({ data }) => {
  return (
    <S.Container>
      <S.Image
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt="Groot"
      />
      <S.Details>
        <S.Name>Titulo: {data.title}</S.Name>
        <S.Id>ID: {data.id}</S.Id>
      </S.Details>
    </S.Container>
  );
};

export default CreatorCard;
