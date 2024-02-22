import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Error from "../helper/error";
import AvengersAnimation from "../loading";
import useMedia from "../../hooks/useMedia";
import useFetch from "../../hooks/useFetch";
import HeaderBg from "../../assets/herosBg.jpg";
import SearchInput from "../helper/searchInput";
import SearchNotFound from "../helper/searchNotFound";
import { GET_EVENTS, SEARCH_EVENTS } from "../../api/api";
import MagazineContent from "../container/magazineContent";
import HeaderBgMobile from "../../assets/herosBgMobile.jpg";

const Events = () => {
  const [offset, setOffset] = useState(0);
  const [footerText, setFooterText] = useState("");
  const [eventSearch, setEventSearch] = useState("");
  const [loadedItems, setLoadedItems] = useState([]);
  const { data, loading, error, total, request } = useFetch();

  const mobile = useMedia("(max-width:767px)");

  useEffect(() => {
    const fetchData = async () => {
      const { url, options } = GET_EVENTS(offset);
      const { json } = await request(url, options);
      setFooterText(json.attributionText);
    };
    fetchData();
  }, [request, offset]);

  useEffect(() => {
    if (data) {
      setLoadedItems((prevItems) => {
        // Verifica se os novos dados já estão presentes em prevItems
        const newData = data.filter(
          (item) => !prevItems.some((prevItem) => prevItem.id === item.id)
        );
        // Retorna a combinação de prevItems e os novos dados filtrados
        return [...prevItems, ...newData];
      });
    }
  }, [data]);

  const handleChange = (event) => {
    setEventSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadedItems([]);

    if (eventSearch !== "") {
      const { url, options } = SEARCH_EVENTS(eventSearch);
      request(url, options);
    } else {
      const { url, options } = GET_EVENTS(offset);
      request(url, options);
    }
  };

  const handleLoadMore = () => {
    if (offset + 16 < total) {
      setOffset(offset + 16);
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
            Events
            <span>
              Find out more details and stay up to date with the stories of the
              heroes and villains
            </span>
          </S.Text>
        </S.Wrapper>
        {loading && loadedItems.length === 0 ? (
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

              <S.Content $total={total}>
                {total > 0 ? (
                  <MagazineContent
                    content="events"
                    isHomePage={true}
                    homePageItems={loadedItems}
                  />
                ) : (
                  <SearchNotFound />
                )}
              </S.Content>

              {total > loadedItems.length && (
                <S.ButtonContainer>
                  <S.LoadMore onClick={handleLoadMore}>Load More</S.LoadMore>
                  {loading && <div className="custom-loader" />}
                </S.ButtonContainer>
              )}
            </S.Container>
            <div className="subFooter">{footerText}</div>
          </S.Background>
        )}
      </S.Section>
    </>
  );
};

export default Events;
