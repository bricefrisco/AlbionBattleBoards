import { NavLink } from "react-router";

export default function Pagination({
  start,
  end,
  total,
  previousTo,
  previousDisabled,
  nextTo,
  nextDisabled,
  className,
}) {
  if (end === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-between border-t border-gray-200 bg-white dark:border-white/10 dark:bg-transparent ${className}`}
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Showing <span className="font-medium">{start}</span> to{" "}
          <span className="font-medium">{end}</span> of{" "}
          <span className="font-medium">{total.toLocaleString()}</span> records
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {!previousDisabled && (
          <NavLink
            to={previousTo}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:inset-ring-white/5 dark:hover:bg-white/20"
          >
            Previous
          </NavLink>
        )}
        <NavLink
          to={nextTo}
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:inset-ring-white/5 dark:hover:bg-white/20"
          disabled={nextDisabled}
        >
          Next
        </NavLink>
      </div>
    </nav>
  );
}
