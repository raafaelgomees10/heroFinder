import React from "react";
import * as S from "./styles";
import Teste from "../../assets/groot.gif";

const HeroCard = ({ name }) => {
  return (
    <S.Container>
      <S.Image src={Teste} alt="Groot" />
      <S.Details>
        <S.Name>{name}</S.Name>
        <S.Id>ID: 1010802 </S.Id>
      </S.Details>
    </S.Container>
  );
};

export default HeroCard;
