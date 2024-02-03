import config from "../core/config";

const API_URL = "http://gateway.marvel.com/v1/public";
const totalHeros = 1564; //total de herois consultado na api
const randomHerois = Math.floor(Math.random() * totalHeros + 1);
const baseParams = `ts=${config.timeStamp}&apikey=${config.apiKey}&hash=${config.hash}`;

export function GET_HEROS() {
  return {
    url: `${API_URL}/characters?${baseParams}&offset=${randomHerois}&limit=20`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function SEARCH_HEROS(name) {
  return {
    url: `${API_URL}/characters?nameStartsWith=${name}&${baseParams}&limit=20`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function GET_COMICS() {
  return {
    url: `${API_URL}/comics?ts=${config.timeStamp}&apikey=${config.apiKey}&hash=${config.hash}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function GET_CREATORS() {
  return {
    url: `${API_URL}/creators?${baseParams}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function GET_EVENTS() {
  return {
    url: `${API_URL}/events?${baseParams}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function GET_SERIES() {
  return {
    url: `${API_URL}/series?${baseParams}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function GET_STORIES() {
  return {
    url: `${API_URL}/stories?${baseParams}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
