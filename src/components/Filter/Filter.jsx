import React, { useEffect, useState, useCallback } from "react";
import "./Filter.css";

const Filter = ({ loadDogs, loadSubDogs }) => {
  let [filterBreed, setFilterBreed] = useState("");
  let [filterSubBreed, setFilterSubBreed] = useState("");
  let [allBreeds, setAllBreeds] = useState({});
  let [breeds, setBreeds] = useState([]);
  let [subBreeds, setSubBreeds] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
    let data = await response.json();
    setBreeds(Object.keys(data.message));
    setAllBreeds(data.message);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  const handleBreedChange = (event) => {
    setFilterBreed(event.target.value);
    setFilterSubBreed("");
    setSubBreeds(allBreeds[event.target.value]);
    loadDogs(event.target.value);
  };

  const handleSubBreedChange = (event) => {
    setFilterSubBreed(event.target.value);
    loadSubDogs(filterBreed, event.target.value);
  };

  return (
    <>
      <div className="input-group mb-3 filter-container">
        <select
          name="breed"
          id="breed"
          onChange={handleBreedChange}
          value={filterBreed}
          className="form-control"
        >
          <option value="">Raza</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>

        <select
          name="subBreed"
          id="subBreed"
          onChange={handleSubBreedChange}
          value={filterSubBreed}
          className="form-control"
        >
          <option value="">Sub-raza</option>
          {subBreeds.map((subBreed, index) => (
            <option key={index} value={subBreed}>
              {subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;
