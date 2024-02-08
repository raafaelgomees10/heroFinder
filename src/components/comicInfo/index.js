import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import * as S from "./styles";
import { GET_COMIC } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import Card from "./components/card";
import { ReactComponent as ArrowIcon } from "../../assets/arrowRight.svg";
import ModalVariants from "./components/modalVariants";

const ComicInfo = () => {
  const [modal, setModal] = useState(false);
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const urlPath = window.location.pathname.split("/");
    const comicId = urlPath.pop();
    const { url, options } = GET_COMIC(comicId);
    request(url, options);
  }, [request]);

  const publishedDate =
    data && data[0].dates.filter((opt) => opt.type === "onsaleDate")[0].date;

  const formatedDate = dayjs(publishedDate).format("MMMM D, YYYY");

  const creatorsObject = {};

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

  const serieId = data && data[0].series.resourceURI.split("/").pop();
  return (
    <>
      {data && (
        <S.Section>
          <S.BackgroundImage />
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
                    <S.SubTitle>
                      Published:
                      <span> {formatedDate}</span>
                    </S.SubTitle>
                    <S.Description>
                      {data[0].description !== ""
                        ? data[0].description
                        : "No description provided by marvel."}
                    </S.Description>

                    <S.SubTitle>
                      Serie:
                      <span>
                        <S.Text to={`/series/${serieId}`}>
                          <p>{data[0].series.name}</p>
                        </S.Text>
                      </span>
                    </S.SubTitle>

                    {data[0].variants.length > 0 && (
                      <S.Covers onClick={() => setModal(true)}>
                        See cover variants <ArrowIcon />
                      </S.Covers>
                    )}
                  </S.Details>

                  {data[0].creators.available > 0 && (
                    <S.Details>
                      <S.Title>Producers</S.Title>
                      <S.Creators>
                        {creators.map((creator, index) => {
                          return (
                            <S.Role key={index}>
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
                            </S.Role>
                          );
                        })}
                      </S.Creators>
                    </S.Details>
                  )}
                  {/* </S.Details> */}

                  {modal && (
                    <ModalVariants
                      variants={data[0].variants}
                      setModal={setModal}
                    />
                  )}
                </S.Box>
              </S.Content>
              {data[0].characters.available > 0 && (
                <S.Details>
                  <S.Title>Characters</S.Title>
                  <S.Characters>
                    {data[0].characters.items.map((hero, index) => {
                      const heroId = hero.resourceURI.split("/").pop();

                      return <Card key={index} heroId={heroId} />;
                    })}
                  </S.Characters>
                </S.Details>
              )}
            </S.Container>
          </S.Wrapper>
        </S.Section>
      )}
    </>
  );
};

export default ComicInfo;
