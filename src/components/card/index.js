import React from "react";
import * as S from "./styles";

const Card = ({ data }) => {
  return (
    <S.Container to={`/characters/${data.id}`}>
      <S.Content>
        <S.Image
          src={`${
            data.thumbnail
              ? ` ${data.thumbnail.path}.${data.thumbnail.extension}`
              : ""
          }`}
          alt={data.name}
        />
      </S.Content>

      <S.Details>
        <S.Name>{data.name}</S.Name>
      </S.Details>
    </S.Container>
  );
};

export default Card;
