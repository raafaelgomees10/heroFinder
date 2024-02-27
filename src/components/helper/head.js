import React from "react";
import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + " | HeroFinder";
  }, [props]);
  return <></>;
};

export default Head;
