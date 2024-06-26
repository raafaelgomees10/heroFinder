import React, { useEffect } from "react";
import * as S from "./styles";
import Card from "../card";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import "@splidejs/react-splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  GET_COMIC_HEROS,
  GET_EVENT_HEROS,
  GET_SERIE_HEROS,
} from "../../api/api";

const CardContent = ({
  type,
  page,
  urlId,
  items = [],
  isHomePage = false,
  isHomeLoading,
}) => {
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

  const mobile = useMedia("(max-width:767px)");
  const tablet = useMedia("(max-width:1199px)");

  if (error) {
    return <S.TextError>Error: {error}</S.TextError>;
  }

  if (loading) {
    return <div className="custom-loader" />;
  }

  return (
    <>
      {isHomePage ? (
        <>
          {items &&
            items.map((hero, index) => (
              <Card
                hero={hero}
                type={type}
                key={index}
                isHomePage={true}
                isHomeLoading={isHomeLoading}
              />
            ))}
        </>
      ) : (
        <>
          {mobile || tablet || total > 6 ? (
            <Splide
              options={{
                rewind: true,
                gap: "2rem",
                perPage: 6,
                autoplay: true,
                perMove: 1,
                breakpoints: {
                  767: {
                    gap: "4rem",
                    perPage: 1,
                    pagination: false,
                  },

                  1199: {
                    perPage: 3,
                    gap: "3rem",
                  },
                },
              }}
            >
              {data &&
                data.map((hero, index) => (
                  <SplideSlide key={hero.id}>
                    <Card hero={hero} />
                    {mobile && (
                      <S.CurrentSlide>
                        {index + 1}/{data.length}
                      </S.CurrentSlide>
                    )}
                  </SplideSlide>
                ))}
            </Splide>
          ) : (
            <>
              {data && data.map((hero) => <Card key={hero.id} hero={hero} />)}
            </>
          )}
        </>
      )}
    </>
  );
};

export default CardContent;
