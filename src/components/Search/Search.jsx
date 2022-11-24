import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import "./Search.css";

const Search = () => {
  const [dogo, setDogo] = useState("");
  const [dogoName, setDogoName] = useState("");
  const [dogoBreed, setDogoBreed] = useState("");
  const [message, setMessage] = useState("");

  function captureDogo(dogo) {
    setMessage("");
    setDogoBreed("");

    fetch(`https://dog.ceo/api/breed/${dogo}/images`)
      .then((response) => response.json())
      .then((data) => {
        setDogoName(dogo);
        setDogo(dogo);

        return fetch(`https://dog.ceo/api/breed/${dogo}/list`);
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status !== "error") {
          setDogoBreed(data);
        } else {
          setMessage(`La raza ${dogo} no es correcta 🐶`);
        }
      });
  }

  function captureSubDogo(dogo, subDogo) {
    setMessage("");
    setDogoBreed("");
    fetch(`https://dog.ceo/api/breed/${dogo}/${subDogo}/images`)
      .then((response) => response.json())
      .then((data) => {
        setDogoName(dogo);
        setDogo(dogo);

        return fetch(`https://dog.ceo/api/breed/${dogo}/list`);
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status !== "error") {
          setDogoBreed({
            message: [data.message[data.message.indexOf(subDogo)]],
          });
        } else {
          setMessage(`La raza ${dogo} no es correcta 🐶`);
        }
      });
  }

  return (
    <>
      <Filter loadDogs={captureDogo} loadSubDogs={captureSubDogo}></Filter>

      <div>
        <div className="input-group mb-3 py-4 input-container">
          <input
            type="text"
            className="form-control"
            placeholder="Busca aquí"
            aria-label="Busca aquí"
            aria-describedby="button-addon2"
            onChange={(e) => setDogo(e.target.value)}
          />
          <button
            className="btn btn-dark "
            type="button"
            id="button-addon2"
            onClick={() => {
              captureDogo(dogo);
            }}
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#fff"
            >
              <path
                d="M15.5 15.5L19 19M5 11a6 6 0 1012 0 6 6 0 00-12 0z"
                stroke="#fff"
              ></path>
            </svg>
          </button>
        </div>

        {dogoBreed && dogoBreed !== null && dogoBreed.status !== "error" ? (
          <div className=" flex-wrap gap-2 pb-3 results-container">
            <Link
              to={`/DogoDetail/${dogoName}`}
              className="text-light text-decoration-none"
            >
              <h2 className="text-capitalize mt-2 mb-0 title">
                {" "}
                Raza: {dogoName}
              </h2>
            </Link>
            <div className="row results-container__sublist ">
              {dogoBreed.message.map(function (breed, index) {
                return (
                  <Link
                    key={index}
                    to={`/DogoDetail/${dogo}/${breed}`}
                    className="text-light text-decoration-none col-5"
                  >
                    <h2 className="text-capitalize mt-2 mb-0">{breed}</h2>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div> {message} </div>
        )}
      </div>
    </>
  );
};

export default Search;
