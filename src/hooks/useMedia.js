import { useEffect, useState } from "react";

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    changeMatch();
    //função vai ocorrer sempre que tiver um resize na janela
    window.addEventListener("resize", changeMatch);

    //sempre que adiciono evento no window tem que limpar no retorno, quando sai da tela, limpa
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
