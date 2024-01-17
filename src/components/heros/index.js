import React from "react";
import * as S from "./styles";
import Input from "../form/input";
import HeroCard from "../heroCard";

const Heros = () => {
  return (
    <S.Section>
      <Input
        id="search"
        type="search"
        placeholder="Digite o nome do personagem que deseja buscar e tecle Enter"
      />

      <S.Content>
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </S.Content>
    </S.Section>
  );
};

export default Heros;
