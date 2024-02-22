import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Error from "../helper/error";
import AvengersAnimation from "../loading";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import HeaderBg from "../../assets/herosBg.jpg";
import SearchInput from "../helper/searchInput";
import CardContent from "../container/cardContent";
import SearchNotFound from "../helper/searchNotFound";
import { GET_HEROS, SEARCH_HEROS } from "../../api/api";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";

const Characters = () => {
  const [heroSearch, setHeroSearch] = useState("");
  const [footerText, setFooterText] = useState("");
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_HEROS();
      const { json } = await request(url, options);
      setFooterText(json.attributionText);
    };
    fetchData();
  }, [request]);

  const mobile = useMedia("(max-width:767px)");

  const handleChange = (event) => {
    setHeroSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (heroSearch !== "") {
      const { url, options } = SEARCH_HEROS(heroSearch);
      request(url, options);
    } else {
      const { url, options } = GET_HEROS();
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
            Characters
            <span>
              Find out more details and stay up to date with the stories of the
              heroes and villains
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
                  placeholder="Search characters"
                  onChange={handleChange}
                  value={heroSearch}
                />
              </form>

              <S.Content>
                {total > 0 ? (
                  <CardContent items={data} isHomePage={true} />
                ) : (
                  <SearchNotFound />
                )}
              </S.Content>
            </S.Container>
            <div className="subFooter">{footerText}</div>
          </S.Background>
        )}
      </S.Section>
    </>
  );
};

export default Characters;
