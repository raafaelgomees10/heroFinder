import React from "react";
import * as S from "./styles";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as WhatsApp } from "../../assets/whatsapp.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const contacts = [
    {
      link: "https://api.whatsapp.com/send?phone=5535984775696",
      name: "Telefone",
      icon: WhatsApp,
    },
    {
      link: "https://www.linkedin.com/in/rafael-gomes-77ab23160/",
      name: "LinkedIn",
      icon: LinkedIn,
    },
    {
      link: "https://github.com/raafaelgomees10",
      name: "GitHub",
      icon: GitHub,
    },
    {
      link: "https://www.instagram.com/rafaelskatee/",
      name: "Email",
      icon: Instagram,
    },
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <S.Footer>
      <S.Container>
        <S.Box>
          <S.Logo onClick={handleClick} className="logoName">
            Hero Finder
          </S.Logo>
          <S.Divider />
          <div>
            <S.Text>
              Developed with ❤️ by{" "}
              <a href="https://rafaelgomes.netlify.app/?utm_source=heroFinder&utm_medium=footer&utm_campaign=project_herofinder">
                Rafael Gomes
              </a>
            </S.Text>
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
          </div>
        </S.Box>
        <S.Box $column>
          <S.Icons>
            {contacts.map((contact, index) => (
              <S.Icon key={index}>
                <a
                  href={contact.link}
                  target="_blank"
                  aria-label={contact.name}
                  rel="noreferrer"
                >
                  <contact.icon />
                </a>
              </S.Icon>
            ))}
          </S.Icons>
          <S.Text>
            Support:{" "}
            <a href="mailto:raafaelgomees10@gmail.com">
              raafaelgomees10@gmail.com
            </a>
          </S.Text>
        </S.Box>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
