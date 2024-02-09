import React, { useEffect } from "react";
import Variants from "./variants";
import * as S from "./styles";
import { ReactComponent as CloseButton } from "../../../../assets/closeIcon.svg";
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
  return (
    <S.Container>
      <S.Background onClick={() => setModal(false)} />
      <S.Content>
        <S.Close onClick={() => setModal(false)}>
          <CloseButton />
        </S.Close>
        <S.Title>Variants covers for this comic</S.Title>
        <S.Box className={total > 4 && "column"}>
          {variants.map((item, index) => {
            const comicId = item.resourceURI.split("/").pop();
            return <Variants key={index} comicId={comicId} />;
          })}
        </S.Box>
      </S.Content>
    </S.Container>
  );
};

export default ModalVariants;
