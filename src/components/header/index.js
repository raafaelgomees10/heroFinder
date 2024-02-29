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

  const urlParams = window.location.search;

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
              <S.Links to={`/characters${urlParams}`}>Characters</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to={`/comics${urlParams}`}>Comics</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to={`/events${urlParams}`}>Events</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to={`/series${urlParams}`}>Series</S.Links>
            </S.Li>
            <S.Li>
              <S.Links to={`/creators${urlParams}`}>Producers</S.Links>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Container>
    </S.Header>
  );
};

export default Header;
