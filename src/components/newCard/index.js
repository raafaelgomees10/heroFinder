import React from "react";
import * as S from "./styles";
import "@splidejs/react-splide/css/sea-green";

const NewCard = ({ hero }) => {
  return (
    <S.Container to={`/characters/${hero.id}`}>
      <S.Content>
        <S.Image
          src={`${
            hero.thumbnail
              ? ` ${hero.thumbnail.path}.${hero.thumbnail.extension}`
              : ""
          }`}
          alt={hero.name}
        />
      </S.Content>

      <S.Details>
        <S.Name>{hero.name}</S.Name>
      </S.Details>
    </S.Container>
  );
};

export default NewCard;
