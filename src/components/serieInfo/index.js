import React, { useEffect } from "react";
import dayjs from "dayjs";
import * as S from "./styles";
import Error from "../error/error";
import { GET_SERIE } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import { ReactComponent as ArrowIcon } from "../../assets/arrowRight.svg";

const SerieInfo = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const urlPath = window.location.pathname.split("/");
    const serieId = urlPath.pop();
    const { url, options } = GET_SERIE(serieId);
    request(url, options);
  }, [request]);

  const noDescription =
    data &&
    (!data[0].description ||
      data[0].description === null ||
      data[0].description === "");

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
                    {data[0].characters.available > 0 && (
                      <S.Details>
                        <S.Title>Characters</S.Title>
                        <S.Characters>
                          {data[0].characters.items.map((hero, index) => {
                            const heroId = hero.resourceURI.split("/").pop();

                            return (
                              <S.HeroLi key={index}>
                                <S.HeroName to={`/characters/${heroId}`}>
                                  <span>{hero.name}</span>
                                </S.HeroName>
                              </S.HeroLi>
                            );
                          })}
                        </S.Characters>
                      </S.Details>
                    )}
                  </S.Box>
                </S.Content>
              </S.Container>
            </S.Wrapper>
          )}
        </S.Section>
      )}
    </>
  );
};

export default SerieInfo;
