import React from "react";
import * as S from "./styles";

const Card = ({ hero, isHomePage = false, type, isHomeLoading }) => {
  const name = hero.fullName ? hero.fullName : hero.name;
  const urlParams = window.location.search;

  return (
    <S.Container
      $isHomePage={isHomePage}
      to={
        type === "creators"
          ? `/creators/${hero.id}${urlParams}`
          : `/characters/${hero.id}${urlParams}`
      }
    >
      <S.Content $isHomeLoading={isHomeLoading}>
        {!isHomeLoading && (
          <S.Image
            src={`${
              hero.thumbnail
                ? ` ${hero.thumbnail.path}.${hero.thumbnail.extension}`
                : ""
            }`}
            alt={`Character: ${hero.name}`}
            $isHomePage={isHomePage}
          />
        )}
      </S.Content>

      <S.Details $isHomePage={isHomePage}>
        <S.Name $isHomeLoading={isHomeLoading}>{name}</S.Name>
      </S.Details>
    </S.Container>
  );
};

export default Card;
