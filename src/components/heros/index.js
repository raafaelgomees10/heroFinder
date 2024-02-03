import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../form/input";
import Card from "../card";
import useFetch from "../../hooks/useFetch";
import { GET_HEROS, SEARCH_HEROS } from "../../api/api";
import AvengersAnimation from "../loading";
import Teste from "../../assets/teste.jpg";

const Heros = () => {
  const [heroSearch, setHeroSearch] = useState("");
  const { data, loading, request } = useFetch();

  useEffect(() => {
    if (heroSearch === "") {
      const { url, options } = GET_HEROS();
      request(url, options);
    } else {
      const { url, options } = SEARCH_HEROS(heroSearch);
      request(url, options);
    }
  }, [request, heroSearch]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setHeroSearch(event.target.value);
    }
  };

  return (
    <>
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

          {loading ? (
            <AvengersAnimation />
          ) : (
            <S.Container>
              <Input
                type="search"
                placeholder="Pesquisar Personagem"
                onKeyDown={handleKeyDown}
              />
              <S.Content>
                {data &&
                  data.map((hero, index) => (
                    <Card key={index} index={index} type="heros" data={hero} />
                  ))}
              </S.Content>
            </S.Container>
          )}
        </S.Section>
      </>
    </>
  );
};

export default Heros;
