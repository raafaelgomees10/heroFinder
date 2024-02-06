import React, { useEffect, useState } from "react";
import Card from "../card";
import * as S from "./styles";
import Error from "../error/error";
import AvengersAnimation from "../loading";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import HeaderBg from "../../assets/teste.jpg";
import SearchInput from "../form/searchInput";
import SearchNotFound from "../helper/searchNotFound";
import { GET_HEROS, SEARCH_HEROS } from "../../api/api";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";

const Heros = () => {
  const [heroSearch, setHeroSearch] = useState("");
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_HEROS();
    request(url, options);
  }, [request]);

  const mobile = useMedia("(max-width:767px)");

  const handleChange = (event) => {
    setHeroSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (heroSearch !== "") {
      const { url, options } = SEARCH_HEROS(heroSearch);
      request(url, options);
    } else {
      const { url, options } = GET_HEROS();
      request(url, options);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <S.Section>
        <S.Wrapper>
          <S.Image src={mobile ? HeaderBgMobile : HeaderBg} />
          <S.Text>
            Personagens marvel
            <span>
              Conheça mais detalhes e fique por dentro das historias dos herois
              e vilões
            </span>
          </S.Text>
        </S.Wrapper>
        {loading ? (
          <AvengersAnimation />
        ) : (
          <S.Container>
            <form onSubmit={handleSubmit}>
              <SearchInput
                id="search"
                type="search"
                placeholder="Pesquisar Personagem"
                onChange={handleChange}
                value={heroSearch}
              />
            </form>

            <S.Content>
              {total > 0 ? (
                <>
                  {data &&
                    data.map((hero, index) => <Card key={index} data={hero} />)}
                </>
              ) : (
                <SearchNotFound />
              )}
            </S.Content>
          </S.Container>
        )}
      </S.Section>
    </>
  );
};

export default Heros;
