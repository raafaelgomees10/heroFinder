import React, { useEffect, useState } from "react";
import Header from "../header";
import Error from "../helper/error";
import * as S from "../globalStyles";
import { GET_HERO } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import MagazineContent from "../container/magazineContent";

const HeroInfo = () => {
  const [footerText, setFooterText] = useState("");
  const { data, loading, error, request } = useFetch();

  const urlPath = window.location.pathname.split("/");
  const heroId = urlPath.pop();

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_HERO(heroId);
      const { json } = await request(url, options);
      setFooterText(json.attributionText);
    };
    fetchData();
  }, [heroId, request]);

  const noDescription =
    data && (data[0].description === null || data[0].description === "");

  if (error) {
    return <Error error={error} />;
  }

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
                  <S.Content>
                    <S.Image
                      $isSquareImage
                      src={`${
                        data[0].thumbnail
                          ? ` ${data[0].thumbnail.path}.${data[0].thumbnail.extension}`
                          : ""
                      }`}
                      alt={data[0].name}
                    />
                    <S.Details>
                      <S.Title $isCharacters>{data[0].name}</S.Title>
                      <S.Description>
                        {noDescription
                          ? "Marvel has not released a description for this character."
                          : data[0].description}
                      </S.Description>
                    </S.Details>
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
            </>
          )}
        </S.Wrapper>
        <div className="subFooter">{footerText}</div>
      </S.Section>
    </>
  );
};

export default HeroInfo;
