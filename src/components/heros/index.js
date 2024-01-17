import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../form/input";
import HeroCard from "../heroCard";
import config from "../../core/config";

const Heros = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // let response;
    // let json;
    try {
      const fetchHeros = async () => {
        const totalHeros = 1564; //total de herois consultado na api
        const randomHerois = Math.floor(Math.random() * totalHeros + 1);
        const baseUrl = "http://gateway.marvel.com/v1/public";
        const finalUrl = `${baseUrl}/characters?ts=${config.timeStamp}&apikey=${config.apiKey}&hash=${config.hash}&limit=12&offset=${randomHerois}`;

        setLoading(true);

        const response = await fetch(finalUrl);
        const json = await response.json();

        if (!response.ok) {
          setError("errou");
        }

        setLoading(false);
        setData(json && json.data.results);
      };

      fetchHeros();
    } catch (e) {
      setError("asasa");
    }
  }, []);
  return (
    <S.Section>
      <Input
        id="search"
        type="search"
        placeholder="Digite o nome do personagem que deseja buscar e tecle Enter"
      />

      <S.Content>
        {loading ? (
          <div>carregando .... </div>
        ) : (
          <>
            {data.map((hero, index) => (
              <HeroCard key={index} data={hero} />
            ))}
          </>
        )}
      </S.Content>
    </S.Section>
  );
};

export default Heros;
