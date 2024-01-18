import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../form/input";
import CreatorCard from "../creatorCard";
import useFetch from "../../hooks/useFetch";
import { GET_CREATORS } from "../../api/api";

const Creators = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_CREATORS();

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
                <CreatorCard key={index} data={serie} />
              ))}
          </>
        )}
      </S.Content>
    </S.Section>
  );
};

export default Creators;
