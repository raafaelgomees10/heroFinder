import React, { useState } from "react";
import * as S from "./styles";
import Logo from "../../assets/logo.png";
import useMedia from "../../hooks/useMedia";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width:767px)");

  return (
    <S.Header>
      <S.Container>
        <S.Box>
          <S.Logo>
            <img src={Logo} alt="marvel" width={150} height={48} />
          </S.Logo>
          {mobile && (
            <S.MobileButton
              className={mobileMenu && "active"}
              aria-label="Menu"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          )}
        </S.Box>

        <S.Nav
          className={`${mobile && "navMobile"} ${
            mobileMenu && "navMobileActive"
          }`}
        >
          <S.Ul>
            <S.Li>
              <S.Links to="/">Characters</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/comics">Comics</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/events">Events</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/series">Series</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to="/criadores">Producers</S.Links>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Container>
    </S.Header>
  );
};

export default Header;
