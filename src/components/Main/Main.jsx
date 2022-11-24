import React from "react";
import Search from "../Search/Search";
import Content from "../Content/Content";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="p-2 main">
        <h1 className="text-center py-4">Dog CEO</h1>
        <h5 className="text-center">Encuentra a tu nuevo mejor amigo</h5>

        <Search></Search>

        <Content></Content>
      </div>
    </>
  );
};

export default Main;
