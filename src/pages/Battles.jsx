import { useEffect, useMemo, useRef, useState } from "react";
import PocketBase from "pocketbase";
import Header from "../components/Header.jsx";
import BattlesTable from "../components/BattlesTable.jsx";
import { useSearchParams } from "react-router";
import Filters from "../components/Filters.jsx";
import Pagination from "../components/Pagination.jsx";
import AlliancesBattleTable from "../components/AlliancesBattleTable.jsx";
import GuildsBattleTable from "../components/GuildsBattleTable.jsx";

const searchTypes = {
  ALLIANCE: "alliance",
  GUILD: "guild",
  PLAYER: "player",
};

function Battles() {
  const pb = useRef(null);
  const [loading, setLoading] = useState(false);
  const [battles, setBattles] = useState(null);
  let [searchParams] = useSearchParams();

  const type = useMemo(() => {
    const t = searchParams.get("type");
    if (!t) return null;
    switch (t) {
      case searchTypes.ALLIANCE:
        return searchTypes.ALLIANCE;
      case searchTypes.GUILD:
        return searchTypes.GUILD;
      case searchTypes.PLAYER:
        return searchTypes.PLAYER;
      default:
        return searchTypes.ALLIANCE;
    }
  }, [searchParams]);

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    pb.current = new PocketBase("https://api.bricefrisco.com");
    const page = searchParams.get("page") || 1;
    const players = searchParams.get("players") || 10;
    const type = searchParams.get("type") || searchTypes.ALLIANCE;
    const query = searchParams.get("query") || "";

    const run = async () => {
      setLoading(true);
      setBattles(null);

      let collection = "battles";
      let filter = "";
      if (query) {
        switch (type) {
          case searchTypes.ALLIANCE:
            collection = "battle_participants_alliances";
            filter += `allianceNameLower = '${query.trim().toLowerCase()}'`;
            break;
          case searchTypes.GUILD:
            collection = "battle_participants_guilds";
            filter += `guildNameLower = '${query.trim().toLowerCase()}'`;
            break;
          case searchTypes.PLAYER:
            collection = "battle_participants_players";
            filter += `playerNameLower = '${query.trim().toLowerCase()}'`;
            break;
          default:
            collection = "battles";
        }
      }

      if (players) {
        const playerVerbiage = !query ? "numPlayers" : "players";
        filter += (filter ? " && " : "") + `${playerVerbiage} >= ${players}`;
      }

      console.log(`${type} || ${collection} || ${filter}`);

      const battles = await pb.current
        .collection(collection)
        .getList(page, 20, {
          filter: filter,
          sort: "-startTime",
        });

      setLoading(false);
      setBattles(battles);
    };

    run();
  }, [searchParams]);

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <Header />
      <div className="mt-10">
        <Filters />
        {battles && (
          <>
            {!type && <BattlesTable battles={battles} />}
            {type === searchTypes.ALLIANCE && (
              <AlliancesBattleTable battles={battles} />
            )}
            {type === searchTypes.GUILD && (
              <GuildsBattleTable battles={battles} />
            )}
            <Pagination
              start={(battles.page - 1) * 20 + 1}
              end={(battles.page - 1) * 20 + battles.items.length}
              total={battles.totalItems}
              previousTo={`?page=${battles.page - 1}&players=${searchParams.get("players") || "10"}`}
              nextTo={`?page=${battles.page + 1}&players=${searchParams.get("players") || "10"}`}
              previousDisabled={battles.page <= 1}
              nextDisabled={battles.page >= battles.totalPages}
              className="py-4"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Battles;
