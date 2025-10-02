import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <h2>Procure por um Usuário:</h2>
      <p>Descubra os melhores Reposítórios!</p>

      <div>
        <input type="text" placeholder="Digite o nome do usuário" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
