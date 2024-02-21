import React, { useEffect } from "react";
import * as S from "./styles";
import Error from "../helper/error";
import { GET_HERO } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import MagazineContent from "../container/magazineContent";

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

  console.log("data", data);

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
                <S.Details>
                  <S.Title>Comics</S.Title>
                  <S.ContainerContent $total={data[0].comics.available}>
                    <MagazineContent
                      perPage={5}
                      page="characters"
                      content="comics"
                      urlId={data[0].id}
                    />
                  </S.ContainerContent>
                </S.Details>
              )}
              {data[0].events.available > 0 && (
                <S.Details>
                  <S.Title>Events</S.Title>
                  <S.ContainerContent $total={data[0].events.available}>
                    <MagazineContent
                      perPage={5}
                      page="characters"
                      content="events"
                      urlId={data[0].id}
                    />
                  </S.ContainerContent>
                </S.Details>
              )}
              {data[0].series.available > 0 && (
                <S.Details>
                  <S.Title>Series</S.Title>
                  <S.ContainerContent $total={data[0].series.available}>
                    <MagazineContent
                      perPage={5}
                      page="characters"
                      content="series"
                      urlId={data[0].id}
                    />
                  </S.ContainerContent>
                </S.Details>
              )}
            </S.Container>
          )}
        </S.Wrapper>
      )}
    </S.Section>
  );
};

export default HeroInfo;
