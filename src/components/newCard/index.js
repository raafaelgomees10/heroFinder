import React from "react";
import * as S from "./styles";
import "@splidejs/react-splide/css/sea-green";

const NewCard = ({ hero, isHomePage = false, type }) => {
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
        <S.Name> {type === "creators" ? hero.fullName : hero.name} </S.Name>
      </S.Details>
    </S.Container>
  );
};

export default NewCard;
