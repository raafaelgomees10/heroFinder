import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import ModalDetails from "../modalDetails";
import "@splidejs/react-splide/css/sea-green";
import useFetch from "../../../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  GET_HERO_COMICS,
  GET_HERO_EVENTS,
  GET_HERO_SERIES,
} from "../../../../api/api";

const HeroDetails = ({ heroId, totalAvailible, title, method }) => {
  const [modalDetails, setModalDetails] = useState(false);
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    if (title === "comics") {
      const { url, options } = GET_HERO_COMICS(heroId);
      request(url, options);
    }
    if (title === "events") {
      const { url, options } = GET_HERO_EVENTS(heroId);
      request(url, options);
    }

    if (title === "series") {
      const { url, options } = GET_HERO_SERIES(heroId);
      request(url, options);
    }
  }, [heroId, request, title]);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {title === "events" && console.log("events", data)}
      {loading ? (
        <>Carregando</>
      ) : (
        <S.Content className={totalAvailible > 4 ? "" : "noSlide"}>
          {totalAvailible > 5 ? (
            <>
              <Splide
                options={{
                  rewind: true,
                  gap: "2rem",
                  perPage: 5,
                  autoplay: true,
                  perMove: 5,
                }}
                aria-label={title}
              >
                {data &&
                  data.map((item) => (
                    <SplideSlide key={item.id}>
                      <S.Box>
                        {/* arrumar esse to aqui */}
                        <Link to={`/quadrinhos/${item.id}`} target="_blank">
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
            </>
          )}

          {modalDetails && <ModalDetails setModalDetails={setModalDetails} />}
        </S.Content>
      )}
    </S.Container>
  );
};

export default HeroDetails;
