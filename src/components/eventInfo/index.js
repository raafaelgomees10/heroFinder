import React, { useEffect } from "react";
import dayjs from "dayjs";
import * as S from "./styles";
import Error from "../error/error";
import { GET_EVENT } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import Card from "../comicInfo/components/card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ReactComponent as ArrowIcon } from "../../assets/arrowRight.svg";

const EventInfo = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const urlPath = window.location.pathname.split("/");
    const comicId = urlPath.pop();
    const { url, options } = GET_EVENT(comicId);
    request(url, options);
  }, [request]);

  const noDescription =
    data && (data[0].description === null || data[0].description === "");

  const nextEventId = data && data[0].next.resourceURI.split("/").pop();

  const prevEventId = data && data[0].previous.resourceURI.split("/").pop();
  // creating object for creators
  const creatorsObject = {};

  //mapping all creators and creating arrays for different role types which will contain the name and ID of everyone who is part of the same role
  data &&
    data[0].creators.items.map((creator) => {
      const urlPath = creator.resourceURI.split("/");
      const creatorId = urlPath.pop();
      if (creatorsObject[creator.role]) {
        creatorsObject[creator.role].push({
          name: creator.name,
          creatorId: creatorId,
        });
      } else {
        creatorsObject[creator.role] = [
          { name: creator.name, creatorId: creatorId },
        ];
      }
    });

  const creators = Object.entries(creatorsObject).map(([role, people]) => ({
    role,
    people,
  }));

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
                    <S.Details>
                      <S.Title>{data[0].title}</S.Title>

                      <S.Description>
                        {noDescription
                          ? "Marvel has not released a description for this event."
                          : data[0].description}
                      </S.Description>

                      <S.EventPeriod>
                        <S.Dates>
                          Released:
                          <span>
                            {" "}
                            {dayjs(data[0].start).format("MMMM D, YYYY")}
                          </span>
                        </S.Dates>
                        <S.Dates>
                          Finished:
                          <span>
                            {" "}
                            {dayjs(data[0].end).format("MMMM D, YYYY")}
                          </span>
                        </S.Dates>
                      </S.EventPeriod>

                      <S.EventsButtons>
                        <S.Buttons
                          prev="true"
                          reloadDocument
                          to={`/events/${prevEventId}`}
                        >
                          <ArrowIcon />
                          Previous Event - {data[0].previous.name}
                        </S.Buttons>

                        <S.Buttons to={`/events/${nextEventId}`} reloadDocument>
                          Next Event - {data[0].next.name} <ArrowIcon />
                        </S.Buttons>
                      </S.EventsButtons>
                    </S.Details>

                    {data[0].creators.available > 0 && (
                      <S.Details>
                        <S.Title>Producers</S.Title>
                        <S.Creators>
                          {creators.map((creator, index) => {
                            return (
                              <S.Li key={index}>
                                {creator.role}
                                <br />
                                {creator.people.map((item, i) => (
                                  <S.LinkName
                                    key={item.creatorId}
                                    to={`/creators/${item.creatorId}`}
                                    target="_blank"
                                  >
                                    <span>{item.name}</span>
                                    {i !== creator.people.length - 1 && ", "}
                                  </S.LinkName>
                                ))}
                              </S.Li>
                            );
                          })}
                        </S.Creators>
                      </S.Details>
                    )}
                  </S.Box>
                </S.Content>

                {data[0].characters.available > 0 && (
                  <S.Details>
                    <S.Title>Characters</S.Title>

                    {data[0].characters.available > 6 ? (
                      <Splide
                        options={{
                          rewind: true,
                          gap: "2rem",
                          perPage: 6,
                          autoplay: true,
                          perMove: 1,
                        }}
                      >
                        {data[0].characters.items.map((hero, index) => {
                          const heroId = hero.resourceURI.split("/").pop();

                          return (
                            <SplideSlide key={index}>
                              <Card key={index} heroId={heroId} />
                            </SplideSlide>
                          );
                        })}
                      </Splide>
                    ) : (
                      <S.Characters available={data[0].characters.available}>
                        {data[0].characters.items.map((hero, index) => {
                          const heroId = hero.resourceURI.split("/").pop();

                          return <Card key={index} heroId={heroId} />;
                        })}
                      </S.Characters>
                    )}
                  </S.Details>
                )}

                {data[0].series.available > 0 && (
                  <S.Details>
                    <S.Title>Series</S.Title>
                    <S.Series>
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
                    </S.Series>
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

export default EventInfo;
