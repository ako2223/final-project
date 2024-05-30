import React from "react";
import style from "./Home.module.scss";
import Hero from "../../components/Hero/Hero";
import Posts from "../../components/Posts/Posts";

function Home() {
  return (
    <div className={style.wrapper}>
      <Posts />
    </div>
  );
}

export default Home;
