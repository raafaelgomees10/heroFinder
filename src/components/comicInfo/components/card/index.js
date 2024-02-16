import React, { useEffect } from "react";
import * as S from "./styles";
import { GET_COMIC_HEROS } from "../../../../api/api";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Card = ({ urlId }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_COMIC_HEROS(urlId);
    request(url, options);
  }, [request, urlId]);

  return (
    <>
      {error ? (
        <S.TextError>Error: {error}</S.TextError>
      ) : loading ? (
        <S.TextError>Carregando</S.TextError>
      ) : (
        <>
          {total > 6 ? (
            <Splide
              options={{
                rewind: true,
                gap: "2rem",
                perPage: 6,
                autoplay: true,
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
