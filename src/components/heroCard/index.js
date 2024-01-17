import React from "react";
import * as S from "./styles";
import Teste from "../../assets/groot.gif";

const HeroCard = ({ data }) => {
  console.log(data);
  return (
    <S.Container>
      <S.Image
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt="Groot"
      />
      <S.Details>
        <S.Name>Nome: {data.name}</S.Name>
        <S.Id>ID: {data.id}</S.Id>
      </S.Details>
    </S.Container>
  );
};

export default HeroCard;
