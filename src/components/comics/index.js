import React, { useEffect } from "react";
import * as S from "./styles";
import Input from "../form/input";
import Card from "../card";
import useFetch from "../../hooks/useFetch";
import { GET_COMICS } from "../../api/api";
import AvengersAnimation from "../loading";

const Comics = () => {
  const { data, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_COMICS();

    request(url, options);
  }, [request]);

  return (
    <>
      {loading ? (
        <AvengersAnimation />
      ) : (
        <S.Section>
          <Input
            id="search"
            type="search"
            placeholder="Digite o nome do personagem que deseja buscar e tecle Enter"
          />
          <S.Content>
            {data &&
              data.map((comic, index) => (
                <Card key={index} type="comics" data={comic} />
              ))}
          </S.Content>
        </S.Section>
      )}
    </>
  );
};

export default Comics;