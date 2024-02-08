import React, { useEffect } from "react";
import * as S from "./styles";

const ModalDetails = ({ setModalDetails, project }) => {
  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        setModalDetails(false);
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      window.removeEventListener("keydown ", escFunction);
    };
  }, [setModalDetails]);

  return (
    <S.Container>
      <S.Background onClick={() => setModalDetails(false)} />
      <S.Content>
        <S.Box>
          SOIDJAIODJAIOSDJOIASDJIOASDJIOASDJASIO asoidjaosidasoidoai
          {/* <S.Close onClick={() => setModalDetails(false)}>X</S.Close>
          <S.Image
            alt={project.name}
            src={project.image}
            width={450}
            height={275}
          />

          <S.Details>
            <S.Title>{project.name}</S.Title>
            <S.Description>{project.description}</S.Description>
            <S.Languages>
              {project.languages.map((item) => (
                <S.Items key={item.name}>
                  <p>{item.name}</p>
                  <img width={32} height={32} src={item.icon} alt={item.name} />
                </S.Items>
              ))}
            </S.Languages>
          </S.Details> */}
        </S.Box>
        {/* <S.Buttons>
          <S.Button href={project.link} target="_blank">
            Projeto
          </S.Button>
          <S.Button href={project.github} target="_blank">
            Repositório
          </S.Button>
        </S.Buttons> */}
      </S.Content>
    </S.Container>
  );
};

export default ModalDetails;
