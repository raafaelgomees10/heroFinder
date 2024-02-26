import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Header from "../header";
import Error from "../helper/error";
import AvengersAnimation from "../loading";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import HeaderBg from "../../assets/herosBg.jpg";
import SearchInput from "../helper/searchInput";
import SearchNotFound from "../helper/searchNotFound";
import { GET_COMICS, SEARCH_COMICS } from "../../api/api";
import MagazineContent from "../container/magazineContent";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";

const Comics = () => {
  const [search, setSearch] = useState("");
  const [footerText, setFooterText] = useState("");
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_COMICS();

      const { json } = await request(url, options);
      setFooterText(json.attributionText);
    };
    fetchData();
  }, [request]);

  const mobile = useMedia("(max-width:767px)");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search !== "") {
      const { url, options } = SEARCH_COMICS(search);
      request(url, options);
    } else {
      const { url, options } = GET_COMICS();
      request(url, options);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Header />
      <S.Section>
        <S.Wrapper>
          <S.Image
            src={mobile ? HeaderBgMobile : HeaderBg}
            alt="Comics with marvel characters"
          />
          <S.Text>
            Comics
            <span>
              Find out more details and stay up to date with the stories of the
              heroes and villains
            </span>
          </S.Text>
        </S.Wrapper>
        <S.Background>
          <S.Container>
            <form onSubmit={handleSubmit}>
              <SearchInput
                id="search"
                type="search"
                placeholder="Search comics"
                onChange={handleChange}
                value={search}
              />
            </form>
            {loading ? (
              <>
                <AvengersAnimation />
                <S.Content>
                  <MagazineContent
                    isHomePage={true}
                    isHomeLoading={loading}
                    homePageItems={Array(4).fill(0)}
                  />
                </S.Content>
              </>
            ) : (
              <S.Content>
                {total > 0 ? (
                  <MagazineContent
                    content="comics"
                    isHomePage={true}
                    homePageItems={data}
                  />
                ) : (
                  <SearchNotFound />
                )}
              </S.Content>
            )}
          </S.Container>
          <div className="subFooter">{footerText}</div>
        </S.Background>
      </S.Section>
    </>
  );
};

export default Comics;
