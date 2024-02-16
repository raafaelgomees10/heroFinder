import React from "react";
import * as S from "./styles";

const Card = ({ data, type }) => {
  return (
    <S.Container
      to={
        type === "creators" ? `/creators/${data.id}` : `/characters/${data.id}`
      }
    >
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
        <S.Name>{type === "creators" ? data.fullName : data.name}</S.Name>
      </S.Details>
    </S.Container>
  );
};

export default Card;
