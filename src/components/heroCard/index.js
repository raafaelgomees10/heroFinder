import React from "react";
import * as S from "./styles";
import Teste from "../../assets/groot.gif";

const HeroCard = () => {
  return (
    <S.Container>
      <S.Image src={Teste} alt="Groot" />
      <S.Details>
        <S.Name>Nome: Ant-Man (Eric O'Grady)</S.Name>
        <S.Id>ID: 1010802 </S.Id>
      </S.Details>
    </S.Container>
  );
};

export default HeroCard;
