import React from "react";
import * as S from "./styles";

const Card = ({ hero, isHomePage = false, type }) => {
  const name = hero.fullName ? hero.fullName : hero.name;
  return (
    <S.Container
      $isHomePage={isHomePage}
      to={
        type === "creators" ? `/creators/${hero.id}` : `/characters/${hero.id}`
      }
    >
      <S.Content>
        <S.Image
          src={`${
            hero.thumbnail
              ? ` ${hero.thumbnail.path}.${hero.thumbnail.extension}`
              : ""
          }`}
          alt={hero.name}
          $isHomePage={isHomePage}
        />
      </S.Content>

      <S.Details $isHomePage={isHomePage}>
        <S.Name> {name} </S.Name>
      </S.Details>
    </S.Container>
  );
};

export default Card;
