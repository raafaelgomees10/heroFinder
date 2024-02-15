import React, { useEffect } from "react";
import { GET_COMIC } from "../../../../api/api";
import useFetch from "../../../../hooks/useFetch";
import * as S from "./styles";

const Variants = ({ comicId }) => {
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_COMIC(comicId);
    request(url, options);
  }, [comicId, request]);

  return (
    <>
      {data &&
        data.map((comic) => (
          <S.ImageContainer
            reloadDocument
            key={comic.id}
            to={`/comics/${comic.id}`}
          >
            <S.ImageContent>
              <S.Image
                src={`${
                  comic.thumbnail
                    ? ` ${comic.thumbnail.path}.${comic.thumbnail.extension}`
                    : ""
                }`}
                alt={"Variant Covers"}
              />
            </S.ImageContent>
          </S.ImageContainer>
        ))}
    </>
  );
};

export default Variants;
