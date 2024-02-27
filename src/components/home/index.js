import React from "react";
import * as S from "./styles";
import Header from "../header";
import Head from "../helper/head";
import SpiderMan from "../../assets/spiderMan.png";

const Home = () => {
  return (
    <S.Wrapper>
      <Head title="Home" />
      <Header isRelative={true} />
      <S.Section>
        <S.Container>
          <S.Content>
            <S.Box>
              <S.Ballon>
                <S.Text>
                  Discover more about comic book icons and the masters behind
                  Marvel stories. Find intriguing details and join this exciting
                  journey.
                </S.Text>
              </S.Ballon>
            </S.Box>
            <S.Box>
              <S.Image src={SpiderMan} alt="Spider Man without mask" />
            </S.Box>
          </S.Content>
        </S.Container>
      </S.Section>
    </S.Wrapper>
  );
};

export default Home;
