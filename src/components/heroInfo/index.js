import React, { useEffect } from "react";
import * as S from "./styles";
import { GET_HERO } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import HeroDetails from "./components/heroDetails";
import Error from "../error/error";

const HeroInfo = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const urlPath = window.location.pathname.split("/");
    const heroId = urlPath.pop();
    const { url, options } = GET_HERO(heroId);
    request(url, options);
  }, [request]);

  const noDescription =
    data && (data[0].description === null || data[0].description === "");

  if (error) {
    return <Error error={error} />;
  }

  console.log("hero", data);
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
                  <S.Description>
                    {noDescription
                      ? "Marvel has not released a description for this character."
                      : data[0].description}
                  </S.Description>
                </S.Box>
              </S.Content>
              {data[0].comics.available > 0 && (
                <HeroDetails
                  heroId={data[0].id}
                  totalAvailible={data[0].comics.available}
                  title="comics"
                />
              )}
              {data[0].events.available > 0 && (
                <HeroDetails
                  heroId={data[0].id}
                  totalAvailible={data[0].events.available}
                  title="events"
                />
              )}
              {data[0].series.available > 0 && (
                <HeroDetails
                  heroId={data[0].id}
                  totalAvailible={data[0].series.available}
                  title="series"
                />
              )}
            </S.Container>
          )}
        </S.Wrapper>
      )}
    </S.Section>
  );
};

export default HeroInfo;
