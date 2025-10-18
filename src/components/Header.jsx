import GithubIcon from "../icons/GithubIcon.jsx";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/3943/3943622.png"
            className="h-8 w-auto not-dark:hidden"
          />
          <span className="ml-2.5 font-semibold">AlbionBattleBoards</span>
        </a>

        <div>
          <GithubIcon className="size-6" />
        </div>
      </nav>
    </header>
  );
}
