export default function Footer() {
  return (
    <footer className="bg-black rounded-t-2xl shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://erection2024.club/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-10" alt="Gamba Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jup.ag/swap/SOL-ERC24_5jNC4YHqF3x1HCuYXDCkxGhtikot8Pfjvr44uo16FeRq"
                className="hover:underline me-4 md:me-6"
              >
                🚀 Buy $ERC24
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/erection2024"
                className="hover:underline me-4 md:me-6"
              >
                👨‍💻 ERC24 on X
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://erection2024.club/"
                className="hover:underline me-4 md:me-6"
              >
                🛜 Website
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/erc24"
                className="hover:underline"
              >
                💬 Join Discord
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Made 📈 by{" "}
          <a
            href="https://twitter.com/erection2024"
            className="hover:underline"
          >
            ERC24™
          </a>
        </span>
      </div>
    </footer>
  );
}

