import React, { useEffect, useState } from "react";
import Header from "../header";
import Error from "../helper/error";
import * as S from "../infoPageStyles";
import { GET_SERIE } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import CardContent from "../container/cardContent";
import MagazineContent from "../container/magazineContent";
import Head from "../helper/head";

const SerieInfo = () => {
  const [footerText, setFooterText] = useState("");
  const { data, loading, error, request } = useFetch();

  const urlPath = window.location.pathname.split("/");
  const serieId = urlPath.pop();

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_SERIE(serieId);
      const { json } = await request(url, options);
      setFooterText(json.attributionText);
    };
    fetchData();
  }, [request, serieId]);

  const noDescription =
    data &&
    (!data[0].description ||
      data[0].description === null ||
      data[0].description === "");

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
  const urlParams = window.location.search;

  return (
    <>
      <Header isRelative={true} isInfoPage={true} />
      <S.Section>
        <S.BackgroundImage />
        <S.Wrapper>
          {loading ? (
            <AvengersAnimation />
          ) : (
            <>
              {data && (
                <S.Container>
                  <Head title="Serie details" />
                  <S.Content>
                    <S.Image
                      src={`${
                        data[0].thumbnail
                          ? ` ${data[0].thumbnail.path}.${data[0].thumbnail.extension}`
                          : ""
                      }`}
                      alt={`Title : ${data[0].title}`}
                    />
                    <S.Box>
                      <S.Details>
                        <S.Title>{data[0].title}</S.Title>

                        <S.Description>
                          {noDescription
                            ? "Marvel has not released a description for this serie."
                            : data[0].description}
                        </S.Description>
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
                                      to={`/creators/${item.creatorId}${urlParams}`}
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
                      <S.ContainerContent>
                        <CardContent page="series" urlId={serieId} />
                      </S.ContainerContent>
                    </S.Details>
                  )}
                  {data[0].events.available > 0 && (
                    <S.Details>
                      <S.Title>Events</S.Title>
                      <S.ContainerContent $total={data[0].events.available}>
                        <MagazineContent
                          perPage={5}
                          page="series"
                          content="events"
                          urlId={serieId}
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
                          page="series"
                          content="comics"
                          urlId={serieId}
                        />
                      </S.ContainerContent>
                    </S.Details>
                  )}
                </S.Container>
              )}
            </>
          )}
          <div className="subFooter">{footerText}</div>
        </S.Wrapper>
      </S.Section>
    </>
  );
};

export default SerieInfo;
