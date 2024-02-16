import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Error from "../error/error";
import Magazine from "../magazine";
import AvengersAnimation from "../loading";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import HeaderBg from "../../assets/herosBg.jpg";
import SearchInput from "../helper/searchInput";
import SearchNotFound from "../helper/searchNotFound";
import { GET_EVENTS, SEARCH_EVENTS } from "../../api/api";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";

const Events = () => {
  const [eventSearch, setEventSearch] = useState("");
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_EVENTS();
    request(url, options);
  }, [request]);

  const mobile = useMedia("(max-width:767px)");

  const handleChange = (event) => {
    setEventSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (eventSearch !== "") {
      const { url, options } = SEARCH_EVENTS(eventSearch);
      request(url, options);
    } else {
      const { url, options } = GET_EVENTS();
      request(url, options);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <S.Section>
        <S.Wrapper>
          <S.Image src={mobile ? HeaderBgMobile : HeaderBg} />
          <S.Text>
            Personagens marvel
            <span>
              Conheça mais detalhes e fique por dentro das historias dos herois
              e vilões
            </span>
          </S.Text>
        </S.Wrapper>
        {loading ? (
          <AvengersAnimation />
        ) : (
          <S.Background>
            <S.Container>
              <form onSubmit={handleSubmit}>
                <SearchInput
                  id="search"
                  type="search"
                  placeholder="Search events"
                  onChange={handleChange}
                  value={eventSearch}
                />
              </form>

              <S.Content>
                {total > 0 ? (
                  <>
                    {data &&
                      data.map((hero, index) => (
                        <Magazine key={index} data={hero} />
                      ))}
                  </>
                ) : (
                  <SearchNotFound />
                )}
              </S.Content>
            </S.Container>
          </S.Background>
        )}
      </S.Section>
    </>
  );
};

export default Events;
