import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../form/input";
import StorieCard from "../storieCard";
import useFetch from "../../hooks/useFetch";
import { GET_STORIES } from "../../api/api";

const Stories = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_STORIES();

    request(url, options);
  }, [request]);

  console.log(data);

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
              data.map((story, index) => (
                <StorieCard key={index} data={story} />
              ))}
          </>
        )}
      </S.Content>
    </S.Section>
  );
};

export default Stories;
