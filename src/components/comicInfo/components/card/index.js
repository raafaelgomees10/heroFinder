import React, { useEffect } from "react";
import * as S from "./styles";
import {
  GET_COMIC_HEROS,
  GET_EVENT_HEROS,
  GET_SERIE_HEROS,
} from "../../../../api/api";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Card = ({ urlId, page }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const pages = {
      comics: GET_COMIC_HEROS,
      events: GET_EVENT_HEROS,
      series: GET_SERIE_HEROS,
    };

    const fetchPageContent = pages[page];
    if (fetchPageContent) {
      const { url, options } = fetchPageContent(urlId);
      request(url, options);
    }
  }, [request, urlId, page]);

  return (
    <>
      {error ? (
        <S.TextError>Error: {error}</S.TextError>
      ) : loading ? (
        <div class="custom-loader" />
      ) : (
        <>
          {total > 6 ? (
            <Splide
              options={{
                rewind: true,
                gap: "2rem",
                perPage: 6,
                // autoplay: true,
                perMove: 1,
              }}
            >
              {data &&
                data.map((hero) => (
                  <SplideSlide key={hero.id}>
                    <S.Container to={`/characters/${hero.id}`}>
                      <S.Content>
                        <S.Image
                          src={`${
                            hero.thumbnail
                              ? ` ${hero.thumbnail.path}.${hero.thumbnail.extension}`
                              : ""
                          }`}
                          alt={hero.name}
                        />
                      </S.Content>

                      <S.Details>
                        <S.Name>{hero.name}</S.Name>
                      </S.Details>
                    </S.Container>
                  </SplideSlide>
                ))}
            </Splide>
          ) : (
            <>
              {data &&
                data.map((hero) => (
                  <S.Container key={hero.id} to={`/characters/${hero.id}`}>
                    <S.Content>
                      <S.Image
                        src={`${
                          hero.thumbnail
                            ? ` ${hero.thumbnail.path}.${hero.thumbnail.extension}`
                            : ""
                        }`}
                        alt={hero.name}
                      />
                    </S.Content>

                    <S.Details>
                      <S.Name>{hero.name}</S.Name>
                    </S.Details>
                  </S.Container>
                ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Card;
