import React, { useEffect } from "react";
import * as S from "./styles";
import Error from "../error/error";
import { GET_CREATOR } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";

const CreatorInfo = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const urlPath = window.location.pathname.split("/");
    const creatorId = urlPath.pop();
    const { url, options } = GET_CREATOR(creatorId);
    request(url, options);
  }, [request]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      {data && (
        <S.Section>
          <S.BackgroundImage />
          {loading ? (
            <AvengersAnimation />
          ) : (
            <S.Wrapper>
              <S.Container>
                <S.Content>
                  <S.Image
                    src={`${
                      data[0].thumbnail
                        ? ` ${data[0].thumbnail.path}.${data[0].thumbnail.extension}`
                        : ""
                    }`}
                    alt={data[0].title}
                  />
                  <S.Box>
                    <S.Details style={{ textAlign: "center" }}>
                      <S.Title>{data[0].fullName}</S.Title>
                    </S.Details>
                    {data[0].events.available > 0 && (
                      <S.Details>
                        <S.Title>Events</S.Title>
                        <S.InfoList>
                          {data[0].events.items.map((event, index) => {
                            const eventId = event.resourceURI.split("/").pop();

                            return (
                              <S.Li key={index}>
                                <S.LinkName to={`/events/${eventId}`}>
                                  <span>{event.name}</span>
                                </S.LinkName>
                              </S.Li>
                            );
                          })}
                        </S.InfoList>
                      </S.Details>
                    )}
                    {data[0].comics.available > 0 && (
                      <S.Details>
                        <S.Title>Characters</S.Title>
                        <S.InfoList>
                          {data[0].comics.items.map((comic, index) => {
                            const comicsId = comic.resourceURI.split("/").pop();

                            return (
                              <S.Li key={index}>
                                <S.LinkName to={`/comics/${comicsId}`}>
                                  <span>{comic.name}</span>
                                </S.LinkName>
                              </S.Li>
                            );
                          })}
                        </S.InfoList>
                      </S.Details>
                    )}
                  </S.Box>
                </S.Content>
                {data[0].series.available > 0 && (
                  <S.Details>
                    <S.Title>Series</S.Title>
                    <S.InfoList>
                      {data[0].series.items.map((serie, index) => {
                        const serieId = serie.resourceURI.split("/").pop();

                        return (
                          <S.Li key={index}>
                            <S.LinkName
                              to={`/series/${serieId}`}
                              target="_blank"
                            >
                              <span>{serie.name}</span>
                            </S.LinkName>
                          </S.Li>
                        );
                      })}
                    </S.InfoList>
                  </S.Details>
                )}
              </S.Container>
            </S.Wrapper>
          )}
        </S.Section>
      )}
    </>
  );
};

export default CreatorInfo;
