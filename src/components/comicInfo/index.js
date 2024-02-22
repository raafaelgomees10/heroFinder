import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Error from "../helper/error";
import * as S from "../globalStyles";
import { GET_COMIC } from "../../api/api";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import ModalVariants from "../modalVariants";
import { Infos, Covers, SerieName } from "./styles";
import CardContent from "../container/cardContent";
import { ReactComponent as ArrowIcon } from "../../assets/arrowRight.svg";

const ComicInfo = () => {
  const [modal, setModal] = useState(false);
  const { data, loading, error, request } = useFetch();
  const [footerText, setFooterText] = useState("");

  const urlPath = window.location.pathname.split("/");
  const comicId = urlPath.pop();

  useEffect(() => {
    const fetchComics = async () => {
      const { url, options } = GET_COMIC(comicId);
      const { json } = await request(url, options);
      setFooterText(json.attributionText);
    };

    fetchComics();
  }, [comicId, request]);

  const publishedDate =
    data && data[0].dates.filter((opt) => opt.type === "onsaleDate")[0].date;

  const formatedDate = dayjs(publishedDate).format("MMMM D, YYYY");

  const serieId = data && data[0].series.resourceURI.split("/").pop();

  const noDescription =
    data && (data[0].description === null || data[0].description === "");

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

                      <Infos>
                        Published:
                        <span> {formatedDate}</span>
                      </Infos>

                      <S.Description>
                        {noDescription
                          ? "Marvel has not released a description for this comic."
                          : data[0].description}
                      </S.Description>

                      <Infos>
                        Serie:
                        <span>
                          <SerieName to={`/series/${serieId}`}>
                            <p>
                              {data[0].series.name} <ArrowIcon />
                            </p>
                          </SerieName>
                        </span>
                      </Infos>

                      {data[0].variants.length > 0 && (
                        <Covers onClick={() => setModal(true)}>
                          See cover variants <ArrowIcon />
                        </Covers>
                      )}
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
                      <CardContent page="comics" urlId={comicId} />
                    </S.ContainerContent>
                  </S.Details>
                )}

                {modal && (
                  <ModalVariants
                    variants={data[0].variants}
                    setModal={setModal}
                  />
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

export default ComicInfo;
