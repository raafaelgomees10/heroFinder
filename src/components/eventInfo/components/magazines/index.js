import React, { useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css/sea-green";
import useMedia from "../../../../hooks/useMedia";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  GET_CREATOR_COMICS,
  GET_CREATOR_EVENTS,
  GET_CREATOR_SERIES,
  GET_EVENT_COMICS,
  GET_EVENT_SERIES,
  GET_HERO_COMICS,
  GET_HERO_EVENTS,
  GET_HERO_SERIES,
  GET_SERIE_COMICS,
  GET_SERIE_EVENTS,
} from "../../../../api/api";

const Magazines = ({ page, urlId, content, perPage }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const pageContent = {
      events: {
        comics: GET_EVENT_COMICS,
        series: GET_EVENT_SERIES,
      },
      series: {
        comics: GET_SERIE_COMICS,
        events: GET_SERIE_EVENTS,
      },
      creators: {
        comics: GET_CREATOR_COMICS,
        events: GET_CREATOR_EVENTS,
        series: GET_CREATOR_SERIES,
      },
      characters: {
        comics: GET_HERO_COMICS,
        events: GET_HERO_EVENTS,
        series: GET_HERO_SERIES,
      },
    };
    // Chama a função específica de busca correspondente à página e ao conteúdo
    const fetchPageContent = pageContent[page]?.[content];
    if (fetchPageContent) {
      const { url, options } = fetchPageContent(urlId);
      request(url, options);
    }
  }, [request, urlId, page, content]);

  const mobile = useMedia("(max-width:767px)");
  const isCreator = page === "creators";
  return (
    <S.Container>
      {error ? (
        <>Error: {error}</>
      ) : loading ? (
        <div className="custom-loader" />
      ) : (
        <S.Content className={total > 4 ? "" : "noSlide"}>
          {total > 5 || mobile ? (
            <>
              <Splide
                options={{
                  rewind: true,
                  gap: "2rem",
                  perPage: perPage,
                  autoplay: true,
                  perMove: 1,
                  breakpoints: {
                    767: {
                      gap: "6rem",
                      perPage: 1,
                      fixedHeight: 320,
                      pagination: false,
                    },
                    1199: {
                      perPage: !isCreator ? 1 : 3,
                      gap: "1rem",
                    },
                  },
                }}
                aria-label={(`slides`, content)}
              >
                {data &&
                  data.map((item, index) => (
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
                      {mobile && (
                        <S.CurrentSlide>
                          {index + 1}/{data.length}
                        </S.CurrentSlide>
                      )}
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

export default Magazines;
