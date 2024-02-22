import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Error from "../helper/error";
import AvengersAnimation from "../loading";
import useFetch from "../../hooks/useFetch";
import useMedia from "../../hooks/useMedia";
import HeaderBg from "../../assets/herosBg.jpg";
import SearchInput from "../helper/searchInput";
import CardContent from "../container/cardContent";
import SearchNotFound from "../helper/searchNotFound";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";
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
      <S.Section>
        <S.Wrapper>
          <S.Image src={mobile ? HeaderBgMobile : HeaderBg} />
          <S.Text>
            Producers
            <span>
              Meet the marvel producers and find out which stories they had a
              role in
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
                  placeholder="Search producers"
                  onChange={handleChange}
                  value={search}
                />
              </form>

              <S.Content>
                {total > 0 ? (
                  <CardContent items={data} type="creators" isHomePage={true} />
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

export default Creators;
