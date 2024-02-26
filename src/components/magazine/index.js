import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Magazine = ({ content, item, isHomePage = false, isHomeLoading }) => {
  const title = item.title ? item.title : item.name;
  return (
    <S.Box $isHomeLoading={isHomeLoading} $isHomePage={isHomePage}>
      {!isHomeLoading && (
        <Link to={`/${content}/${item.id}`} target="_blank">
          <S.Image
            src={`${
              item.thumbnail
                ? ` ${item.thumbnail.path}.${item.thumbnail.extension}`
                : ""
            }`}
            $isHomePage={isHomePage}
            alt={title}
          />
          <S.Name $isHomePage={isHomePage}>{title}</S.Name>
        </Link>
      )}
    </S.Box>
  );
};

export default Magazine;
