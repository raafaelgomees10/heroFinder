import React, { useEffect, useState } from "react";
import Header from "../header";
import Head from "../helper/head";
import Error from "../helper/error";
import * as S from "../searchPageStyles";
import AvengersAnimation from "../loading";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import HeaderBg from "../../assets/herosBg.webp";
import SearchInput from "../helper/searchInput";
import SearchNotFound from "../helper/searchNotFound";
import { GET_COMICS, SEARCH_COMICS } from "../../api/api";
import MagazineContent from "../container/magazineContent";
import HeaderBgMobile from "../../assets/herosBgMobile.webp";

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
      <Head title="Comics" />
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
              Each page refresh displays a new randomized listing
              <br />
              Search and explore details of all available titles
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
