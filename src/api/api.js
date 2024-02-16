import config from "../core/config";

const API_URL = "http://gateway.marvel.com/v1/public";
const totalHeros = 1564; //total de herois consultado na api
const totalComics = 59124;
const totalSeries = 14673;
const totalCreators = 5935;
const randomHerois = Math.floor(Math.random() * totalHeros + 1);
const randomComics = Math.floor(Math.random() * totalComics + 1);
const randomSeries = Math.floor(Math.random() * totalSeries + 1);
const randomCreators = Math.floor(Math.random() * totalCreators + 1);
const baseParams = `ts=${config.timeStamp}&apikey=${config.apiKey}&hash=${config.hash}`;

export function GET_HEROS() {
  return {
    url: `${API_URL}/characters?${baseParams}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
    },
  };
}

export function GET_HERO(heroId) {
  return {
    url: `${API_URL}/characters/${heroId}?${baseParams}`,
    options: {
      method: "GET",
    },
  };
}

export function GET_HERO_EVENTS(heroId) {
  return {
    url: `${API_URL}/characters/${heroId}/events?${baseParams}&limit=100`,
    options: {
      method: "GET",
    },
  };
}

export function GET_HERO_COMICS(heroId) {
  return {
    url: `${API_URL}/characters/${heroId}/comics?${baseParams}&limit=100`,
    options: {
      method: "GET",
    },
  };
}
export function GET_HERO_SERIES(heroId) {
  return {
    url: `${API_URL}/characters/${heroId}/series?${baseParams}&limit=100`,
    options: {
      method: "GET",
    },
  };
}

export function GET_HERO_STORIES(heroId) {
  return {
    url: `${API_URL}/characters/${heroId}/stories?${baseParams}&limit=100`,
    options: {
      method: "GET",
    },
  };
}

export function SEARCH_HEROS(name) {
  return {
    url: `${API_URL}/characters?nameStartsWith=${name}&${baseParams}&limit=20`,
    options: {
      method: "GET",
    },
  };
}

export function GET_COMICS() {
  return {
    url: `${API_URL}/comics?${baseParams}&offset=${randomComics}&limit=15`,
    options: {
      method: "GET",
    },
  };
}

export function GET_COMIC(comicId) {
  return {
    url: `${API_URL}/comics/${comicId}?${baseParams}`,
    options: {
      method: "GET",
    },
  };
}

export function SEARCH_COMICS(name) {
  return {
    url: `${API_URL}/comics?titleStartsWith=${name}&${baseParams}&limit=15`,
    options: {
      method: "GET",
    },
  };
}

export function GET_EVENTS() {
  return {
    url: `${API_URL}/events?${baseParams}&limit=16`,
    options: {
      method: "GET",
    },
  };
}

export function GET_EVENT(eventId) {
  return {
    url: `${API_URL}/events/${eventId}?${baseParams}`,
    options: {
      method: "GET",
    },
  };
}

export function SEARCH_EVENTS(name) {
  return {
    url: `${API_URL}/events?nameStartsWith=${name}&${baseParams}&limit=15`,
    options: {
      method: "GET",
    },
  };
}

export function GET_CREATORS() {
  return {
    url: `${API_URL}/creators?${baseParams}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
    },
  };
}

export function GET_SERIES() {
  return {
    url: `${API_URL}/series?${baseParams}&offset=${randomSeries}&limit=16`,
    options: {
      method: "GET",
    },
  };
}

export function GET_SERIE(serieId) {
  return {
    url: `${API_URL}/series/${serieId}?${baseParams}`,
    options: {
      method: "GET",
    },
  };
}
export function SEARCH_SERIES(name) {
  return {
    url: `${API_URL}/series?titleStartsWith=${name}&${baseParams}&limit=16`,
    options: {
      method: "GET",
    },
  };
}

export function GET_STORIES() {
  return {
    url: `${API_URL}/stories?${baseParams}&offset=${randomHerois}&limit=15`,
    options: {
      method: "GET",
    },
  };
}
