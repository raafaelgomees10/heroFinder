import React from "react";
import * as S from "./styles";

const Card = ({ data, type }) => {
  return (
    <S.Container>
      <S.Image
        src={`${
          data.thumbnail
            ? ` ${data.thumbnail.path}.${data.thumbnail.extension}`
            : ""
        }`}
        alt="Groot"
      />
      <S.Details>
        <S.Name>
          {type === "heros" ? (
            <>Nome: {data.name}</>
          ) : type === "creators" ? (
            <>Nome: {data.fullName}</>
          ) : (
            <>Titulo: {data.title}</>
          )}
        </S.Name>
        <S.Id>ID: {data.id}</S.Id>
      </S.Details>
    </S.Container>
  );
};

export default Card;
