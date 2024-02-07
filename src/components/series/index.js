import React, { useEffect } from "react";
import Card from "../card";
import * as S from "./styles";
import { GET_SERIES } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import SearchInput from "../helper/searchInput";

const Series = () => {
  const { data, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_SERIES();

    request(url, options);
  }, [request]);

  return (
    <>
      {loading ? (
        <AvengersAnimation />
      ) : (
        <S.Section>
          <SearchInput
            id="search"
            type="search"
            placeholder="Digite o nome do personagem que deseja buscar e tecle Enter"
          />
          <S.Content>
            {data &&
              data.map((serie, index) => (
                <Card key={index} type="series" data={serie} />
              ))}
          </S.Content>
        </S.Section>
      )}
    </>
  );
};

export default Series;
