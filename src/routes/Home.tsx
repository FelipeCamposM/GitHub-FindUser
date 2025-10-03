import Search from "../components/Search";
import { useState } from "react";
import { type UserProps } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setUser(null);
    setError(false);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      setUser(null);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
    setError(false);
  };

  return (
    <div className="mt-4 flex justify-center text-white">
      <div className="bg-slate-900 w-full max-w-[400px] p-4 rounded-xl flex flex-col gap-2">
        <h1 className="text-center text-xl font-medium">
          Bem-vindo ao GitHub User Finder
        </h1>
        <div className="text-sm text-white/70">
          <p>Pesquise usuários do GitHub e veja seus perfis</p>
          <p>Descubra os melhores Reposítórios!</p>
        </div>
        {user && <User {...user} />}
        {error && <Error />}
        <Search loadUser={loadUser} />
      </div>
    </div>
  );
};

export default Home;
