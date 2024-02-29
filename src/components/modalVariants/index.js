import React, { useEffect } from "react";
import * as S from "./styles";
import { ReactComponent as CloseButton } from "../../assets/closeIcon.svg";

const ModalVariants = ({ setModal, variants }) => {
  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        setModal(false);
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      window.removeEventListener("keydown ", escFunction);
    };
  }, [setModal, variants]);
  const total = variants && variants.length;
  const urlParams = window.location.search;

  return (
    <S.Container>
      <S.Background onClick={() => setModal(false)} />
      <S.Content>
        <S.Close onClick={() => setModal(false)}>
          <CloseButton />
        </S.Close>
        <S.Title>{total} Variants covers for this comic</S.Title>
        <S.Box className={total > 4 && "column"}>
          {variants.map((variant) => {
            const urlPath = variant.resourceURI.split("/");
            const comicId = urlPath.pop();

            return (
              <S.Item key={comicId}>
                <S.VariantsLink
                  to={`/comics/${comicId}${urlParams}`}
                  target="_blank"
                >
                  {variant.name}
                </S.VariantsLink>
              </S.Item>
            );
          })}
        </S.Box>
      </S.Content>
    </S.Container>
  );
};

export default ModalVariants;
