import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { GET_HERO } from "../../api/api";
import AvengersAnimation from "../loading";
import * as S from "./styles";
import Events from "../events";

const HeroInfo = () => {
  const { data, loading, error, total, request } = useFetch();
  const [hero, setHero] = useState();

  useEffect(() => {
    const urlPath = window.location.pathname.split("/");
    const heroId = urlPath.pop();
    const { url, options } = GET_HERO(heroId);
    request(url, options);
  }, [request]);
  console.log("hero", data);

  return (
    <S.Section>
      <S.BackgroundImage></S.BackgroundImage>

      {loading ? (
        <AvengersAnimation />
      ) : (
        <>
          {data && (
            <S.Container>
              <S.Content>
                <S.Image
                  src={`${
                    data[0].thumbnail
                      ? ` ${data[0].thumbnail.path}.${data[0].thumbnail.extension}`
                      : ""
                  }`}
                  alt="Groot"
                />

                <S.Box>
                  <S.Name>{data[0].name}</S.Name>
                  <S.Description>{data[0].description}</S.Description>
                </S.Box>
              </S.Content>
              {data[0].events.available > 0 && (
                <Events
                  heroId={data[0].id}
                  url={data[0].events.collectionURI}
                />
              )}
            </S.Container>
          )}
        </>
      )}
    </S.Section>
  );
};

export default HeroInfo;
