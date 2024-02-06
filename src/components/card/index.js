import React from "react";
import * as S from "./styles";

const Card = ({ data, type }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Image
          src={`${
            data.thumbnail
              ? ` ${data.thumbnail.path}.${data.thumbnail.extension}`
              : ""
          }`}
          alt="Groot"
        />
      </S.Content>

      <S.Details>
        <S.Name>{data.name}</S.Name>
      </S.Details>
    </S.Container>
  );
};

export default Card;
