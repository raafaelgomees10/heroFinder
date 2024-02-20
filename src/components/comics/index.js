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
import { GET_COMICS, SEARCH_COMICS } from "../../api/api";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";

const Comics = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error, total, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_COMICS();

    request(url, options);
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
      <S.Section>
        <S.Wrapper>
          <S.Image src={mobile ? HeaderBgMobile : HeaderBg} />
          <S.Text>
            Comics
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
                  placeholder="Search comics"
                  onChange={handleChange}
                  value={search}
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

export default Comics;
