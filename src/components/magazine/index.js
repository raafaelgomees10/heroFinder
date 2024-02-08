import React from "react";
import * as S from "./styles";

const Magazine = ({ data }) => {
  const title = data.title ? data.title : data.name;
  return (
    <S.Container to={`${data.id}`}>
      <S.Content>
        <S.Box>
          <S.Image
            src={`${
              data.thumbnail
                ? ` ${data.thumbnail.path}.${data.thumbnail.extension}`
                : ""
            }`}
            alt={data.title}
          />
          <S.Title>{title}</S.Title>
        </S.Box>
      </S.Content>
    </S.Container>
  );
};

export default Magazine;
