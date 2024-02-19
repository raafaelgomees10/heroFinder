import React, { useEffect } from "react";
import * as S from "./styles";
import Error from "../error/error";
import { GET_CREATOR } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import HeroDetails from "../eventInfo/components/heroDetails";

const CreatorInfo = () => {
  const { data, loading, error, request } = useFetch();
  const urlPath = window.location.pathname.split("/");
  const creatorId = urlPath.pop();

  useEffect(() => {
    const { url, options } = GET_CREATOR(creatorId);
    request(url, options);
  }, [creatorId, request]);

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

                    {data[0].comics.available > 0 && (
                      <S.Details>
                        <S.Title>Comics</S.Title>
                        <S.ListContainer>
                          <HeroDetails
                            perPage={3}
                            content="comics"
                            page="creators"
                            urlId={creatorId}
                          />
                        </S.ListContainer>
                      </S.Details>
                    )}
                  </S.Box>
                </S.Content>
                {data[0].events.available > 0 && (
                  <S.Details>
                    <S.Title>EVENTS</S.Title>
                    <S.ListContainer>
                      <HeroDetails
                        perPage={5}
                        page="creators"
                        content="events"
                        urlId={creatorId}
                      />
                    </S.ListContainer>
                  </S.Details>
                )}

                {data[0].series.available > 0 && (
                  <S.Details>
                    <S.Title>Series</S.Title>
                    <S.ListContainer>
                      <HeroDetails
                        perPage={5}
                        content="series"
                        page="creators"
                        urlId={creatorId}
                      />
                    </S.ListContainer>
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
