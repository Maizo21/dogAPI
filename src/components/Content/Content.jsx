import React, { useEffect, useState } from "react";
import ContentListDetail from "../ContentListDetail/ContentListDetail";

const Content = () => {
  let [content, setContent] = useState("");

  useEffect(() => {
    const showDogos = function () {
      fetch(`https://dog.ceo/api/breeds/image/random/8`)
        .then((response) => response.json())
        .then((data) => {
          setContent((content = data));
        });
    };

    showDogos();
  }, []);

  return (
    <>
      {content && content != null ? (
        <ContentListDetail detail={content} />
      ) : null}
    </>
  );
};

export default Content;
