import React, { useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  GET_EVENT_COMICS,
  GET_EVENT_SERIES,
  GET_SERIE_COMICS,
  GET_SERIE_EVENTS,
} from "../../../../api/api";

const HeroDetails = ({ page, urlId, content }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const EventsPageData = () => {
      if (content === "series") {
        const { url, options } = GET_EVENT_SERIES(urlId);
        request(url, options);
      }
      if (content === "comics") {
        const { url, options } = GET_EVENT_COMICS(urlId);
        request(url, options);
      }
    };
    const SeriesPageData = () => {
      if (content === "events") {
        const { url, options } = GET_SERIE_EVENTS(urlId);
        request(url, options);
      }
      if (content === "comics") {
        const { url, options } = GET_SERIE_COMICS(urlId);
        request(url, options);
      }
    };

    if (page === "events") {
      EventsPageData();
    } else if (page === "series") {
      SeriesPageData();
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
