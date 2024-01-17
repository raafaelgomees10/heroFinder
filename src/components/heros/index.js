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
        <HeroCard name="Nome: Iron Man" />
        <HeroCard name="Nome: Iron Man (Iron Man 3 - The Official Game)" />
        <HeroCard name="Nome: Iron Man (LEGO Marvel Super Heroes)" />
        <HeroCard name="Nome: Iron Man (Marvel Heroes)" />
        <HeroCard name="Nome: Iron Man (Marvel War of Heroes)" />
        <HeroCard name="Nome: Iron Man (Ultimate)" />
        <HeroCard name="Nome: Iron Man/Tony Stark (MAA)" />
        <HeroCard name="Nome: Thor Girl" />
      </S.Content>
    </S.Section>
  );
};

export default Heros;
