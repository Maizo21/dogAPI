import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./DogoDetail.css";
import back from "../../images/atras.png";

const DogoDetail = () => {
  const dogoData = useParams();
  const [dogoDetail, setDogoDetail] = useState("");

  useEffect(() => {
    details();
  }, []);

  const details = async () => {
    fetch(
      dogoDetail.breed
        ? `https://dog.ceo/api/breed/${dogoData.name}/${dogoData.breed}/images/random`
        : `https://dog.ceo/api/breed/${dogoData.name}/images/random`
    )
      .then((res) => res.json())
      .then((data) => {
        setDogoDetail(data);
      });
  };

  return (
    <>
      {dogoDetail && (
        <div className="p-4 d-flex justify-content-center align-items-center flex-column gap-4 details-container">
          <div className="align-self-start">
            {" "}
            <Link
              to={`/`}
              className="text-light text-decoration-none col-5 d-flex align-items-center gap-1"
            >
              <img src={back} alt="back" className="back" /> Volver
            </Link>{" "}
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column border rounded bg-dark card-element">
            <img
              src={dogoDetail.message}
              alt={dogoData.breed}
              className="card-img-top"
            />
            <div className="card-body p-4">
              <h2 className="card-title text-capitalize my-2">
                {dogoData.name}
              </h2>
              <h3 className="card-text text-capitalize">{dogoData.breed}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DogoDetail;
