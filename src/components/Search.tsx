type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, type KeyboardEvent } from "react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
        loadUser(userName);
    }
};

  return (
    <div className="text-white">
      <h2>Procure por um Usuário:</h2>
      <div className="flex bg-slate-800 px-2 py-2 rounded-md">
        <input
          className="w-full mr-2 pl-2"
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="hover:bg-slate-900 cursor-pointer p-2 rounded-md transition-all hover:scale-105"
          onClick={() => loadUser(userName)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
