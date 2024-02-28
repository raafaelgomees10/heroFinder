import React, { useEffect, useState } from "react";
import Header from "../header";
import Head from "../helper/head";
import Error from "../helper/error";
import * as S from "../searchPageStyles";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import useMedia from "../../hooks/useMedia";
import SearchInput from "../helper/searchInput";
import HeaderBg from "../../assets/herosBg.webp";
import CardContent from "../container/cardContent";
import SearchNotFound from "../helper/searchNotFound";
import HeaderBgMobile from "../../assets/herosBgMobile.webp";
import { GET_CREATORS, SEARCH_CREATORS } from "../../api/api";

const Creators = () => {
  const [search, setSearch] = useState("");
  const [footerText, setFooterText] = useState("");

  const { data, loading, total, error, request } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_CREATORS();

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
      const { url, options } = SEARCH_CREATORS(search);
      request(url, options);
    } else {
      const { url, options } = GET_CREATORS();
      request(url, options);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Head title="Produers" />
      <Header />
      <S.Section>
        <S.Wrapper>
          <S.Image
            src={mobile ? HeaderBgMobile : HeaderBg}
            alt="Comics with marvel characters"
          />
          <S.Text>
            Producers
            <span>
              Each page refresh displays a new randomized listing
              <br />
              Meet the legends behind iconic story creations
              <br />
              discover which ones each was part of
            </span>
          </S.Text>
        </S.Wrapper>
        <S.Background>
          <S.Container>
            <form onSubmit={handleSubmit}>
              <SearchInput
                id="search"
                type="search"
                placeholder="Search producers"
                onChange={handleChange}
                value={search}
              />
            </form>
            {loading ? (
              <>
                <AvengersAnimation />
                <S.Content>
                  <CardContent
                    isHomePage={true}
                    isHomeLoading={loading}
                    items={Array(5).fill(0)}
                  />
                </S.Content>
              </>
            ) : (
              <S.Content $isCards={true}>
                {total > 0 ? (
                  <CardContent items={data} type="creators" isHomePage={true} />
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

export default Creators;
