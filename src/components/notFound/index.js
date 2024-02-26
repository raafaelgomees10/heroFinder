import React from "react";
import * as S from "./styles";
import Header from "../header";
import { Thanos } from "react-thanos";
import IronMan from "../../assets/ironMan.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const toggleSnap = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.BgRain />
        <S.Content>
          <S.Box>
            <S.Title>Error 404 page not found</S.Title>
            <S.SubTitle>
              Thanos snapped his finger with the Infinity Gauntlet and erased
              this page from existence!
            </S.SubTitle>
            <S.Text>
              To reverse this, click on the Infinity Gauntlet and return to our
              home page
            </S.Text>
            <Thanos
              onSnap={() => toggleSnap()}
              onSnapReverse={() => toggleSnap()}
            />
          </S.Box>
          <S.Image src={IronMan} alt="iron Man" />
        </S.Content>
      </S.Container>
    </>
  );
};

export default NotFound;
