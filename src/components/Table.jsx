import Pagination from "./Pagination.jsx";

const formatDate = (d) => {
  const date = new Date(d);
  return date
    .toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", "");
};

export default function Table({ battles }) {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:text-white"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Alliances
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Guilds
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
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Fame
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {battles.items.map((battle) => (
                  <tr key={battle.id}>
                    <td className="py-4 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pl-0 dark:text-gray-400">
                      {formatDate(battle.startTime)}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-[200px]">
                      {battle.alliances}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-[200px]">
                      {battle.guilds}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 text-right">
                      {battle.numPlayers}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 text-right">
                      {battle.totalKills}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 text-right">
                      {battle.totalFame}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 text-right">
                      Details
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              start={(battles.page - 1) * 20 + 1}
              end={(battles.page - 1) * 20 + battles.items.length}
              total={battles.totalItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
