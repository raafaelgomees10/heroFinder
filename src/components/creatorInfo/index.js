import React, { useEffect } from "react";
import { Box } from "./styles";
import Error from "../helper/error";
import * as S from "../globalStyles";
import AvengersAnimation from "../loading";
import { GET_CREATOR } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import MagazineContent from "../container/magazineContent";

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

  const noImage = data && data[0].thumbnail.path.split("/").pop();

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
                    $isSquareImage={noImage === "image_not_available"}
                  />

                  <Box $isSquareImage={noImage === "image_not_available"}>
                    <S.Details style={{ textAlign: "center" }}>
                      <S.Title>{data[0].fullName}</S.Title>
                    </S.Details>

                    {data[0].comics.available > 0 && (
                      <S.Details>
                        <S.Title>Comics</S.Title>
                        <S.ContainerContent $total={data[0].comics.available}>
                          <MagazineContent
                            perPage={3}
                            content="comics"
                            page="creators"
                            urlId={creatorId}
                          />
                        </S.ContainerContent>
                      </S.Details>
                    )}
                  </Box>
                </S.Content>
                {data[0].events.available > 0 && (
                  <S.Details>
                    <S.Title>EVENTS</S.Title>
                    <S.ContainerContent $total={data[0].events.available}>
                      <MagazineContent
                        perPage={5}
                        page="creators"
                        content="events"
                        urlId={creatorId}
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
                        content="series"
                        page="creators"
                        urlId={creatorId}
                      />
                    </S.ContainerContent>
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
