import React, { useEffect, useState } from "react";
import Card from "../card";
import * as S from "./styles";
import Error from "../error/error";
import { GET_COMICS, SEARCH_COMICS } from "../../api/api";
import AvengersAnimation from "../loading";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import SearchInput from "../helper/searchInput";
import SearchNotFound from "../helper/searchNotFound";
import HeaderBg from "../../assets/teste.jpg";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";
import Magazine from "../magazine";

const Comics = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_COMICS();

    request(url, options);
  }, [request]);

  const mobile = useMedia("(max-width:767px)");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search !== "") {
      const { url, options } = SEARCH_COMICS(search);
      request(url, options);
    } else {
      const { url, options } = GET_COMICS();
      request(url, options);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      {loading ? (
        <AvengersAnimation />
      ) : (
        <S.Section>
          <S.Wrapper>
            <S.Image src={mobile ? HeaderBgMobile : HeaderBg} />
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
            <S.Teste>
              <S.Container>
                <form onSubmit={handleSubmit}>
                  <SearchInput
                    id="search"
                    type="search"
                    placeholder="Pesquisar quadrinhos"
                    onChange={handleChange}
                    value={search}
                  />
                </form>

                <S.Content>
                  {total > 0 ? (
                    <>
                      {data &&
                        data.map((hero, index) => (
                          <Magazine key={index} data={hero} />
                        ))}
                    </>
                  ) : (
                    <SearchNotFound />
                  )}
                </S.Content>
              </S.Container>
            </S.Teste>
          )}
        </S.Section>

        // <S.Section>
        //   <SearchInput
        //     id="search"
        //     type="search"
        //     placeholder="Digite o nome do personagem que deseja buscar e tecle Enter"
        //   />
        //   <S.Content>
        //     {data &&
        //       data.map((comic, index) => (
        //         <Card key={index} type="comics" data={comic} />
        //       ))}
        //   </S.Content>
        // </S.Section>
      )}
    </>
  );
};

export default Comics;
