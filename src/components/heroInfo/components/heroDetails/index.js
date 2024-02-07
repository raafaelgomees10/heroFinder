import React, { useEffect } from "react";
import * as S from "./styles";
import "@splidejs/react-splide/css/sea-green";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  GET_HERO_COMICS,
  GET_HERO_EVENTS,
  GET_HERO_SERIES,
  GET_HERO_STORIES,
} from "../../../../api/api";

const HeroDetails = ({ heroId, totalAvailible, title, method }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    if (title === "quadrinhos") {
      const { url, options } = GET_HERO_COMICS(heroId);
      request(url, options);
      console.log("1");
    }
    if (title === "eventos") {
      console.log("2");
      const { url, options } = GET_HERO_EVENTS(heroId);
      request(url, options);
    }
    if (title === "histórias") {
      console.log("3");
      const { url, options } = GET_HERO_STORIES(heroId);
      request(url, options);
    }
    if (title === "series") {
      console.log("4");
      const { url, options } = GET_HERO_SERIES(heroId);
      request(url, options);
    }
  }, [heroId, request, title]);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      {loading ? (
        <>Carregando</>
      ) : (
        <S.Content>
          {totalAvailible > 4 ? (
            <>
              {title === "quadrinhos" && console.log("comic", data)}
              {/* {title === "histórias" && console.log("hist", data)} */}
              <Splide
                options={{
                  rewind: true,
                  gap: "2rem",
                  perPage: 4,
                  autoplay: true,
                  perMove: 1,
                }}
                aria-label={title}
              >
                {data &&
                  data.map((item) => (
                    <SplideSlide key={item.id}>
                      <S.Box>
                        <S.Image
                          src={`${
                            item.thumbnail
                              ? ` ${item.thumbnail.path}.${item.thumbnail.extension}`
                              : ""
                          }`}
                          alt={item.title}
                        />
                        <S.Name>{item.title}</S.Name>
                      </S.Box>
                    </SplideSlide>
                  ))}
              </Splide>
            </>
          ) : (
            <div style={{ margin: "20px 0 " }}>
              {data &&
                data.map((event) => (
                  <S.Box key={event.id}>
                    <S.Image
                      src={`${
                        event.thumbnail
                          ? ` ${event.thumbnail.path}.${event.thumbnail.extension}`
                          : ""
                      }`}
                      alt={event.title}
                    />
                    <S.Name>{event.title}</S.Name>
                  </S.Box>
                ))}
            </div>
          )}
        </S.Content>
      )}
    </S.Container>
  );
};

export default HeroDetails;
