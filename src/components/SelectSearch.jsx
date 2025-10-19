import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function SelectSearch({
  className,
  label,
  value,
  onChange,
  type,
  onTypeChange,
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <div className="mt-2">
        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:has-[input:focus-within]:outline-indigo-500">
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              value={type}
              onChange={onTypeChange}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-transparent dark:text-gray-400 dark:*:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            >
              <option value="alliance">Alliance Name</option>
              <option value="guild">Guild Name</option>
              <option value="player">Player Name</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
            />
          </div>
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
