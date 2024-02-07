import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { GET_HERO } from "../../api/api";
import AvengersAnimation from "../loading";
import * as S from "./styles";

import HeroDetails from "./components/heroDetails";

const HeroInfo = () => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const urlPath = window.location.pathname.split("/");
    const heroId = urlPath.pop();
    const { url, options } = GET_HERO(heroId);
    request(url, options);
  }, [request]);
  return (
    <S.Section>
      <S.BackgroundImage />

      {loading ? (
        <AvengersAnimation />
      ) : (
        <S.Wrapper>
          {data && (
            <S.Container>
              <S.Content>
                <S.Image
                  src={`${
                    data[0].thumbnail
                      ? ` ${data[0].thumbnail.path}.${data[0].thumbnail.extension}`
                      : ""
                  }`}
                  alt={data[0].name}
                />

                <S.Box>
                  <S.Name>{data[0].name}</S.Name>
                  <S.Description>{data[0].description}</S.Description>
                </S.Box>
              </S.Content>

              <HeroDetails
                heroId={data[0].id}
                totalAvailible={data[0].comics.available}
                title="quadrinhos"
              />

              <HeroDetails
                heroId={data[0].id}
                totalAvailible={data[0].events.available}
                title="eventos"
              />

              <HeroDetails
                heroId={data[0].id}
                totalAvailible={data[0].events.available}
                title="histórias"
              />

              <HeroDetails
                heroId={data[0].id}
                totalAvailible={data[0].events.available}
                title="series"
              />
            </S.Container>
          )}
        </S.Wrapper>
      )}
    </S.Section>
  );
};

export default HeroInfo;
