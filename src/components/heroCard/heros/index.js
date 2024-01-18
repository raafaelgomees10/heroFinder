import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../form/input";
import HeroCard from "../heroCard";
import useFetch from "../../hooks/useFetch";
import { GET_HEROS } from "../../api/api";

const Heros = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_HEROS();

    request(url, options);
  }, [request]);

  return (
    <S.Section>
      <Input
        id="search"
        type="search"
        placeholder="Digite o nome do personagem que deseja buscar e tecle Enter"
      />

      <S.Content>
        {loading ? (
          <div>carregando .... </div>
        ) : (
          <>
            {data &&
              data.map((hero, index) => <HeroCard key={index} data={hero} />)}
          </>
        )}
      </S.Content>
    </S.Section>
  );
};

export default Heros;
