import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import * as S from "../globalStyles";
import Error from "../helper/error";
import { GET_EVENT } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import useMedia from "../../hooks/useMedia";
import CardContent from "../container/cardContent";
import MagazineContent from "../container/magazineContent";
import { EventPeriod, Buttons, EventsButtons, Dates } from "./styles";
import { ReactComponent as ArrowIcon } from "../../assets/arrowRight.svg";

const EventInfo = () => {
  const [footerText, setFooterText] = useState("");
  const { data, loading, error, request } = useFetch();

  const urlPath = window.location.pathname.split("/");
  const eventId = urlPath.pop();

  const mobile = useMedia("(max-width:767px)");

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_EVENT(eventId);
      const { json } = await request(url, options);
      setFooterText(json.attributionText);
    };
    fetchData();
  }, [eventId, request]);

  const noDescription =
    data && (data[0].description === null || data[0].description === "");

  const nextEventId =
    data && data[0].next ? data[0].next.resourceURI.split("/").pop() : false;

  const prevEventId =
    data && data[0].previous
      ? data[0].previous.resourceURI.split("/").pop()
      : false;

  // creating object for creators
  const creatorsObject = {};

  //mapping all creators and creating arrays for different role types which will contain the name and ID of everyone who is part of the same role
  data &&
    // eslint-disable-next-line array-callback-return
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

                      <EventPeriod>
                        {data[0].start && (
                          <Dates>
                            Released:
                            <span>
                              {" "}
                              {dayjs(data[0].start).format("MMMM D, YYYY")}
                            </span>
                          </Dates>
                        )}

                        {data[0].end && (
                          <Dates>
                            Finished:
                            <span>
                              {" "}
                              {dayjs(data[0].end).format("MMMM D, YYYY")}
                            </span>
                          </Dates>
                        )}
                      </EventPeriod>

                      <EventsButtons>
                        {prevEventId && (
                          <Buttons
                            $prev={true}
                            reloadDocument
                            to={`/events/${prevEventId}`}
                          >
                            <ArrowIcon />
                            Previous Event{" "}
                            {!mobile && `- ${data[0].previous.name}`}
                          </Buttons>
                        )}

                        {nextEventId && (
                          <Buttons to={`/events/${nextEventId}`} reloadDocument>
                            Next Event {!mobile && `- ${data[0].next.name}`}{" "}
                            <ArrowIcon />
                          </Buttons>
                        )}
                      </EventsButtons>
                    </S.Details>

                    {data[0].creators.available > 0 && (
                      <S.Details>
                        <S.Title>Producers</S.Title>
                        <S.Creators>
                          {creators.map((creator, index) => {
                            return (
                              <S.CreatorRole key={index}>
                                {creator.role}
                                <br />
                                {creator.people.map((item, i) => (
                                  <S.CreatorName
                                    key={item.creatorId}
                                    to={`/creators/${item.creatorId}`}
                                    target="_blank"
                                  >
                                    <span>{item.name}</span>
                                    {i !== creator.people.length - 1 && ", "}
                                  </S.CreatorName>
                                ))}
                              </S.CreatorRole>
                            );
                          })}
                        </S.Creators>
                      </S.Details>
                    )}
                  </S.Box>
                </S.Content>

                {data[0].characters.available > 0 && (
                  <S.Details $isCards={true}>
                    <S.Title>Characters</S.Title>
                    <S.ContainerContent
                      available={data[0].characters.available}
                    >
                      <CardContent page="events" urlId={eventId} />
                    </S.ContainerContent>
                  </S.Details>
                )}

                {data[0].series.available > 0 && (
                  <S.Details>
                    <S.Title>Series</S.Title>
                    <S.ContainerContent $total={data[0].series.available}>
                      <MagazineContent
                        perPage={5}
                        page="events"
                        content="series"
                        urlId={eventId}
                      />
                    </S.ContainerContent>
                  </S.Details>
                )}
                {data[0].comics.available > 0 && (
                  <S.Details>
                    <S.Title>Comics</S.Title>
                    <S.ContainerContent $total={data[0].comics.available}>
                      <MagazineContent
                        perPage={5}
                        page="events"
                        content="comics"
                        urlId={eventId}
                      />
                    </S.ContainerContent>
                  </S.Details>
                )}
              </S.Container>
            </S.Wrapper>
          )}
          <div className="subFooter">{footerText}</div>
        </S.Section>
      )}
    </>
  );
};

export default EventInfo;
