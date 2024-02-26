import React, { useState } from "react";
import * as S from "./styles";
import useMedia from "../../hooks/useMedia";
import { useNavigate } from "react-router-dom";

const Header = ({ isRelative, isInfoPage }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width:767px)");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <S.Header $isRelative={isRelative} $isInfoPage={isInfoPage}>
      <S.Container>
        <S.Box>
          <S.Logo className="logoName" onClick={handleClick}>
            Hero Finder
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
              <S.Links to="/characters">Characters</S.Links>
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
              <S.Links to="/creators">Producers</S.Links>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Container>
    </S.Header>
  );
};

export default Header;
