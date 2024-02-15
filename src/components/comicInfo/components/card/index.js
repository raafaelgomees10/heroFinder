import React, { useEffect } from "react";
import * as S from "./styles";
import { GET_HERO } from "../../../../api/api";
import useFetch from "../../../../hooks/useFetch";

const Card = ({ heroId }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_HERO(heroId);
    request(url, options);
  }, [heroId, request]);
  return (
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
  );
};

export default Card;
