import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../form/input";
import SerieCard from "../serieCard";
import useFetch from "../../hooks/useFetch";
import { GET_SERIES } from "../../api/api";

const Series = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_SERIES();

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
              data.map((serie, index) => (
                <SerieCard key={index} data={serie} />
              ))}
          </>
        )}
      </S.Content>
    </S.Section>
  );
};

export default Series;
