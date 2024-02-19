import React, { useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  GET_CREATOR_COMICS,
  GET_CREATOR_EVENTS,
  GET_CREATOR_SERIES,
  GET_EVENT_COMICS,
  GET_EVENT_SERIES,
  GET_SERIE_COMICS,
  GET_SERIE_EVENTS,
} from "../../../../api/api";

const HeroDetails = ({ page, urlId, content, perPage }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const pageContent = {
      events: {
        series: GET_EVENT_SERIES,
        comics: GET_EVENT_COMICS,
      },
      series: {
        events: GET_SERIE_EVENTS,
        comics: GET_SERIE_COMICS,
      },
      creators: {
        events: GET_CREATOR_EVENTS,
        comics: GET_CREATOR_COMICS,
        series: GET_CREATOR_SERIES,
      },
    };
    // Chama a função específica de busca correspondente à página e ao conteúdo
    const fetchPageContent = pageContent[page]?.[content];
    if (fetchPageContent) {
      const { url, options } = fetchPageContent(urlId);
      request(url, options);
    }
  }, [request, urlId, page, content]);

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
                  perPage: perPage,
                  autoplay: false,
                  perMove: 1,
                }}
                aria-label={"title"}
              >
                {data &&
                  data.map((item) => (
                    <SplideSlide key={item.id}>
                      <S.Box>
                        <Link to={`/${content}/${item.id}`} target="_blank">
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
                    <Link to={`/${content}/${item.id}`} target="_blank">
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
