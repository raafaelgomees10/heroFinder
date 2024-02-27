import React, { useEffect, useState } from "react";
import Header from "../header";
import Error from "../helper/error";
import * as S from "../searchPageStyles";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import useMedia from "../../hooks/useMedia";
import HeaderBg from "../../assets/herosBg.jpg";
import SearchInput from "../helper/searchInput";
import SearchNotFound from "../helper/searchNotFound";
import { GET_SERIES, SEARCH_SERIES } from "../../api/api";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";
import MagazineContent from "../container/magazineContent";
import Head from "../helper/head";

const Series = () => {
  const [search, setSearch] = useState("");
  const [footerText, setFooterText] = useState("");

  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_SERIES();

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
      const { url, options } = SEARCH_SERIES(search);
      request(url, options);
    } else {
      const { url, options } = GET_SERIES();
      request(url, options);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Head title="Series" />
      <Header />
      <S.Section>
        <S.Wrapper>
          <S.Image src={mobile ? HeaderBgMobile : HeaderBg} />
          <S.Text>
            Series
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
                placeholder="Search series"
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
                    content="series"
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

export default Series;
