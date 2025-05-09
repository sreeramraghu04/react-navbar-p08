import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [extendedNavBar, setExtendedNavBar] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center h-20  text-gray-600 px-10 shadow-md bg-cyan-500">
        <h1 className="text-4xl font-extrabold tracking-wide">Logo</h1>
        <div className="flex items-center gap-6 cursor-pointer">
          <ul
            className={`md:static flex flex-col md:flex-row gap-6 p-6 md:p-0 rounded-lg md:rounded-none bg-gray-200 md:bg-transparent text-black md:text-white font-semibold absolute top-24 md:top-auto transition-all duration-500 z-10 shadow-md md:shadow-none ${
              extendedNavBar ? "right-4" : "top-[-250px] right-[-100px]"
            }`}
          >
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              About
            </li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Contact
            </li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Sign-In/Up
            </li>
          </ul>
          <div
            className="flex md:hidden p-2 rounded-full bg-gray-200 text-gray-600 shadow-md hover:bg-gray-200 transition-colors duration-300"
            onClick={() => {
              setExtendedNavBar((currentState) => !currentState);
            }}
          >
            {extendedNavBar ? <CloseIcon /> : <MenuOpenIcon />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
