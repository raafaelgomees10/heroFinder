import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Magazine = ({ data }) => {
  const title = data.title ? data.title : data.name;
  return (
    <S.Box>
      <Link to={`${data.id}`}>
        <S.Image
          src={`${
            data.thumbnail
              ? ` ${data.thumbnail.path}.${data.thumbnail.extension}`
              : ""
          }`}
          alt={data.title}
        />
        <S.Title>{title}</S.Title>
      </Link>
    </S.Box>
  );
};

export default Magazine;
