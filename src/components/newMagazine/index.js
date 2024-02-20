import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const NewMagazine = ({ content, item }) => {
  return (
    <S.Box>
      <Link to={`/${content}/${item.id}`} target="_blank">
        <S.Image
          src={`${
            item.thumbnail
              ? ` ${item.thumbnail.path}.${item.thumbnail.extension}`
              : ""
          }`}
          alt={item.title}
        />
        <S.Name>{item.title}</S.Name>
      </Link>
    </S.Box>
  );
};

export default NewMagazine;
