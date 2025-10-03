import React from "react";
import type { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  function checkAvatarUrl(avatar_url?: string): string | undefined {
    if (avatar_url) {
      return avatar_url;
    } else {
      return undefined;
    }
  }

  return (
    <div>
      {/* Card Usuario */}
      <div className="flex flex-col bg-slate-800 justify-center p-4 w-full">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-sky-900/20 p-3 rounded-md flex flex-col items-center border-2 border-sky-900 gap-2">
            {avatar_url ? (
              <img
                className="max-h-40 max-w-40 rounded-full"
                src={checkAvatarUrl(avatar_url)}
                alt={login}
              />
            ) : (
              <BiSolidUser className="max-h-40 max-w-40 rounded-full text-6xl text-slate-400" />
            )}
            <span className="text-lg font-semibold">{login}</span>
          </div>
        </div>

        {location && (
        <span className="flex items-center gap-1">
            <MdLocationPin />
            Local: {location}
        </span>
        )}

        <div className="flex flex-col w-full items-center">
            <div className="flex gap-2 bg-sky-600/50 justify-center items-center py-3 my-4 rounded-md w-full">
                <div className="flex gap-1 items-center">
                    <span className="font-semibold">Seguidores:</span>
                    <span className="bg-sky-600/80 px-3 py-1 rounded-lg shadow-2xl text-center">{followers}</span>
                </div>
                <span>|</span>
                <div className="flex gap-1 items-center">
                    <span className="font-semibold">Seguindo:</span>
                    <span className="bg-sky-600/80 px-3 py-1 rounded-lg shadow-2xl text-center">{following}</span>
                </div>
            </div>

            <Link
            className="bg-sky-900/30 max-w-fit py-3 px-2 rounded-lg hover:bg-sky-900/70 transition-all hover:scale-[1.01] border-2 border-sky-900/50 hover:border-sky-900/90"
            to={`https://github.com/${login}?tab=repositories`}
            target="_blank"
            >
            Ver os Melhores Projetos
            </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
