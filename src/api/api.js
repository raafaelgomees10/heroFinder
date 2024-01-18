import config from "../core/config";

const API_URL = "http://gateway.marvel.com/v1/public";
const totalHeros = 1564; //total de herois consultado na api
const randomHerois = Math.floor(Math.random() * totalHeros + 1);

export function GET_HEROS() {
  return {
    url: `${API_URL}/characters?ts=${config.timeStamp}&apikey=${config.apiKey}&hash=${config.hash}&limit=12&offset=${randomHerois}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
