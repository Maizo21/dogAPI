import React, { useEffect, useState } from "react";

import "./ContentListDetail.css";

const ContentDetail = (detail) => {
  let [dogoDetail, setDogoDetail] = useState(detail.detail.message);

  let breed;

  useEffect(() => {
    setDogoDetail(dogoDetail);
  }, []);

  const returnName = function (name) {
    let fullName = name.slice(name.indexOf("ds/") + 3, name.lastIndexOf("/"));
    return (breed = name.includes("-") ? fullName.split("-")[0] : fullName);
  };

  return (
    <>
      {dogoDetail && dogoDetail != null ? (
        <div className="row justify-content-center align-items-center gap-3 cards-container ">
          {dogoDetail.map(function (dogo, index) {
            return (
              <div
                key={index}
                className="col-5 p-0 pb-4 mx-2 border border-dark rounded text-center d-flex flex-column justify-content-center align-items-center card-body"
              >
                <img
                  src={dogo}
                  style={{
                    width: "100%",
                    height: "160px",
                  }}
                  alt={returnName(dogo)}
                />
                <h2 className="text-capitalize mt-2 mb-0 fs-4">
                  {returnName(dogo)}
                </h2>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default ContentDetail;
