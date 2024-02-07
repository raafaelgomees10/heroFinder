import React, { useEffect } from "react";
import * as S from "./styles";
import Card from "../card";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import { GET_CREATORS } from "../../api/api";
import SearchInput from "../helper/searchInput";

const Creators = () => {
  const { data, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_CREATORS();

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
              data.map((creator, index) => (
                <Card key={index} type="creators" data={creator} />
              ))}
          </S.Content>
        </S.Section>
      )}
    </>
  );
};

export default Creators;
