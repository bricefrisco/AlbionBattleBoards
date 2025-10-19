import SelectSearch from "./SelectSearch.jsx";
import Input from "./Input.jsx";
import { NavLink, useSearchParams } from "react-router";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid/index.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  let [searchParams] = useSearchParams();
  const [players, setPlayers] = useState("10");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("alliance");
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    const players = searchParams.get("players");
    setPlayers(players ? players : 10);

    const query = searchParams.get("query");
    if (query) {
      setQuery(query);
    }

    const type = searchParams.get("type");
    if (type) {
      setType(type);
    }
  }, [searchParams]);

  const link = useMemo(() => {
    if (!query) {
      return "/?players=" + players;
    }

    switch (type) {
      case "alliance":
        return `/?type=alliance&query=${query}&players=${players}`;
      case "guild":
        return `/?type=guild&query=${query}&players=${players}`;
      case "player":
        return `/?type=player&query=${query}&players=${players}`;
    }
  }, [type, query, players]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (
        players === searchParams.get("players") &&
        query === searchParams.get("query") &&
        type === searchParams.get("type")
      ) {
        return;
      }
      navigate(link);
    },
    [navigate, link],
  );

  return (
    <form onSubmit={onSubmit} className="flex gap-4 items-end">
      <SelectSearch
        className="max-w-[300px]"
        value={query}
        type={type}
        onTypeChange={(e) => setType(e.target.value)}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Input
        label="Min. Players"
        value={players}
        onChange={(e) => setPlayers(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 hover:cursor-pointer"
      >
        Search
      </button>
      {/*<NavLink*/}
      {/*  to="/"*/}
      {/*  className="flex items-center ml-auto self-end rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"*/}
      {/*>*/}
      {/*  <DocumentDuplicateIcon className="size-6" />*/}
      {/*  View Reports*/}
      {/*</NavLink>*/}
    </form>
  );
};

export default Filters;
