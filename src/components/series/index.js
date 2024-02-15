import React, { useEffect, useState } from "react";
import Card from "../card";
import * as S from "./styles";
import { GET_SERIES, SEARCH_SERIES } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import SearchInput from "../helper/searchInput";
import Magazine from "../magazine";
import HeaderBg from "../../assets/bg2.jpg";
import Error from "../error/error";
import useMedia from "../../hooks/useMedia";
import SearchNotFound from "../helper/searchNotFound";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";

const Series = () => {
  const { data, loading, error, total, request } = useFetch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const { url, options } = GET_SERIES();

    request(url, options);
  }, [request]);

  const mobile = useMedia("(max-width:767px)");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search !== "") {
      const { url, options } = SEARCH_SERIES(search);
      request(url, options);
    } else {
      const { url, options } = GET_SERIES();
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
          <S.Background>
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
          </S.Background>
        </S.Section>
      )}
    </>
  );
};

export default Series;
