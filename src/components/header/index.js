import React from "react";
import * as S from "./styles";
import Logo from "../../assets/logo.png";

const Header = () => {
  // personagens
  // comics
  // criadores
  // eventos
  // series
  // historias

  return (
    <S.Header>
      <S.Container>
        <S.Logo>
          <img src={Logo} alt="marvel" width={150} height={48} />
        </S.Logo>
        <nav>
          <S.Ul>
            <S.Li>
              <S.Links to="/">Personagens</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/quadrinhos">Quadrinhos</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/criadores">Criadores</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/series">Series</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/historias">Historias</S.Links>
            </S.Li>
          </S.Ul>
        </nav>
      </S.Container>
    </S.Header>
  );
};

export default Header;
