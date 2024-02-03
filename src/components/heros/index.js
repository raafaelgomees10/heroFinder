import React, { useEffect } from "react";
import * as S from "./styles";
import Input from "../form/input";
import Card from "../card";
import useFetch from "../../hooks/useFetch";
import { GET_HEROS } from "../../api/api";
import AvengersAnimation from "../loading";
import Teste from "../../assets/teste.jpg";

const Heros = () => {
  const { data, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_HEROS();
    request(url, options);
  }, [request]);

  return (
    <>
      {loading ? (
        <AvengersAnimation />
      ) : (
        <>
          <S.Section>
            <S.Wrapper>
              <S.Image src={Teste} />
              <S.Text>
                Personagens marvel
                <span>
                  Conheça mais detalhes e fique por dentro das historias dos
                  herois e vilões
                </span>
              </S.Text>
            </S.Wrapper>
            <S.Container>
              <Input
                id="search"
                type="search"
                placeholder="Pesquisar Personagem"
              />
              <S.Content>
                {data &&
                  data.map((hero, index) => (
                    <Card key={index} index={index} type="heros" data={hero} />
                  ))}
              </S.Content>
            </S.Container>
          </S.Section>
        </>
      )}
    </>
  );
};

export default Heros;
