import React from "react";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao GitHub User Finder</h1>
      <p>Pesquise usuários do GitHub e veja seus perfis</p>
      <Search />
    </div>
  );
};

export default Home;
