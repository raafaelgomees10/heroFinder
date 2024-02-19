import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GET_EVENT_COMICS, GET_EVENT_SERIES } from "../../../../api/api";

const HeroDetails = ({ page, urlId }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    if (page === "comics") {
      const { url, options } = GET_EVENT_COMICS(urlId);
      request(url, options);
    }
    if (page === "events") {
      const { url, options } = GET_EVENT_SERIES(urlId);
      request(url, options);
    }
  }, [request, urlId, page]);

  return (
    <S.Container>
      {error ? (
        <>Error: {error}</>
      ) : loading ? (
        <>Carregando</>
      ) : (
        <S.Content className={total > 4 ? "" : "noSlide"}>
          {total > 5 ? (
            <>
              <Splide
                options={{
                  rewind: true,
                  gap: "2rem",
                  perPage: 5,
                  autoplay: false,
                  perMove: 1,
                }}
                aria-label={"title"}
              >
                {data &&
                  data.map((item) => (
                    <SplideSlide key={item.id}>
                      <S.Box>
                        {/* arrumar esse to aqui */}
                        <Link to={`/${page}/${item.id}`} target="_blank">
                          <S.Image
                            src={`${
                              item.thumbnail
                                ? ` ${item.thumbnail.path}.${item.thumbnail.extension}`
                                : ""
                            }`}
                            alt={item.title}
                          />
                          <S.Name>{item.title}</S.Name>
                        </Link>
                      </S.Box>
                    </SplideSlide>
                  ))}
              </Splide>
            </>
          ) : (
            <>
              {data &&
                data.map((item) => (
                  <S.Box key={item.id}>
                    <Link to={`/${page}/${item.id}`} target="_blank">
                      <S.Image
                        src={`${
                          item.thumbnail
                            ? ` ${item.thumbnail.path}.${item.thumbnail.extension}`
                            : ""
                        }`}
                        alt={item.title}
                      />
                      <S.Name>{item.title}</S.Name>
                    </Link>
                  </S.Box>
                ))}
            </>
          )}
        </S.Content>
      )}
    </S.Container>
  );
};

export default HeroDetails;
