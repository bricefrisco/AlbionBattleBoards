import Checkbox from "./Checkbox.jsx";
import { formatDate, formatNumber } from "../util/index.js";
import NoBattlesFound from "./NoBattlesFound.jsx";

export default function GuildsBattleTable({ battles }) {
  if (battles.items.length === 0) {
    return <NoBattlesFound />;
  }

  return (
    <div>
      <div className="-mx-4 mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg dark:ring-white/15">
        <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 dark:text-white"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                Guild
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white"
              >
                Average IP
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white"
              >
                Players
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white"
              >
                Kills
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-white"
              >
                Deaths
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white"
              >
                Kill Fame
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:pr-6 dark:text-white"
              >
                Death Fame
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-white/10">
            {battles.items.map((battle) => (
              <tr key={battle.id}>
                <td className="items-center py-4 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pl-6 dark:text-gray-400">
                  <div className="flex">
                    <Checkbox />
                    <div className="ml-2 mt-0.5">
                      {formatDate(battle.startTime)}
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 font-semibold text-sm text-gray-400 dark:text-gray-200 max-w-[200px]">
                  {battle.guildName}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 text-right">
                  {Math.round(battle.averageIp)}
                </td>
                <td className="px-3 py-4 text-sm text-gray-400 dark:text-gray-200 max-w-[200px] text-right">
                  {battle.players}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-green-600 text-right">
                  {battle.kills}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-red-400 sm:pr-6 text-right">
                  {battle.deaths}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-purple-400 sm:pr-6 text-right">
                  {battle.killFame === 0 ? "-" : formatNumber(battle.killFame)}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-orange-400 sm:pr-6 text-right">
                  {battle.deathFame === 0
                    ? "-"
                    : formatNumber(battle.deathFame)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
