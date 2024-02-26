import React from "react";
import * as S from "./styles";
import SpiderMan from "../../assets/spiderMan.png";
import Header from "../header";

const Home = () => {
  return (
    <S.Wrapper>
      <Header isRelative={true} />
      <S.Section>
        <S.Container>
          <S.Content>
            <S.Box>
              <S.Ballon>
                <S.Text>
                  Find out more more details, elevate your experiences about
                  heroes and villains, comics and events
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
