import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { GET_HERO_EVENT } from "../../api/api";
import * as S from "./styles";

const Events = ({ heroId }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_HERO_EVENT(heroId);
    request(url, options);
  }, [heroId, request]);

  console.log("eve", data);
  return (
    <S.Container>
      <S.Title>Eventos</S.Title>
      <S.Content>
        {data &&
          data.map((event) => (
            <S.Event>
              <S.Image
                src={`${
                  event.thumbnail
                    ? ` ${event.thumbnail.path}.${event.thumbnail.extension}`
                    : ""
                }`}
                alt={event.title}
              />
            </S.Event>
          ))}
      </S.Content>
    </S.Container>
  );
};

export default Events;
