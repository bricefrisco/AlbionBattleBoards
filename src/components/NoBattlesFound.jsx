const NoBattlesFound = () => {
  return (
    <div className="py-8 text-gray-500 dark:text-gray-400 max-w-[650px]">
      No battles found based on the current filters.
      <br /> <br />
      <strong>Alliance/Guild/Player Name:</strong> Must match exactly, but is
      not case-sensitive.
      <br /> <br />
      <strong>Min. Players:</strong> When searching by alliance or guild name,
      the minimum players is that of the players in that alliance or guild, and
      not the entire battle.
    </div>
  );
};

export default NoBattlesFound;
