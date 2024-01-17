import React from "react";
import * as S from "./styles";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <img src={Logo} alt="marvel" width={150} height={48} />
      </S.Logo>
    </S.Header>
  );
};

export default Header;
