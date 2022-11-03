import { useState } from "react";
import Menu from "../assets/icons/menu.png";
import closeMenu from "../assets/icons/close.png";
import Search from "../assets/icons/search.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [searchBox, setSearchBox] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    props.setMenu((prev) => !prev);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    setSearchBox((prev) => !prev);
    props.setSearchBtnClicked((prev) => !prev);
  };

  return (
    <div
      className={`fixed top-0 bg-lightGray z-10 w-full text-gray-300 font-Rubik`}
    >
      {/* ${!searchBox ? "border-2 border-lightGray" : ""} */}
      <div
        className={`navbar flex justify-between px-6 py-4 items-center shadow-md shadow-mediumGray`}
      >
        <div
          className="icon cursor-pointer"
          onClick={() => props.setMenu((prev) => !prev)}
        >
          <img
            src={props.menu ? closeMenu : Menu}
            alt="menu"
            className="w-7 transition-all duration-300"
          />
        </div>
        {searchBox && (
          <div className={`logo text-[1.35rem] font-medium text-gray-200`}>
            <Link to={-1}>The Morning Post</Link>
          </div>
        )}
        {searchBox && (
          <div
            className="search-icon cursor-pointer"
            onClick={() => {
              setSearchBox((prev) => !prev);
            }}
          >
            <img src={Search} alt="search" className="w-7" />
          </div>
        )}
        {!searchBox && (
          <div>
            <div className="flex justify-center items-center border-2 border-lightGray rounded-md bg-mediumGray pr-3">
              <input
                className="px-3 w-56 py-[0.35rem] rounded-md bg-mediumGray sm:w-80 sm:py-[0.4rem] md:w-[22rem] md:py-[0.5rem]"
                type="text"
                name="search"
                id="search"
                value={props.searchInput}
                onChange={(e) => props.setSearchInput(e.target.value)}
                placeholder="Search TMP..."
              />

              {props.searchInput ? (
                <Link to="searchresult">
                  <button className="ml-4 pr-1" onClick={handleSubmit}>
                    <img src={Search} alt="search" className="w-[.9rem]" />
                  </button>
                </Link>
              ) : (
                <p
                  className="text-blue-700 font-medium ml-[1.2rem] pr-1 cursor-pointer"
                  onClick={() => setSearchBox((prev) => !prev)}
                >
                  X
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <hr className="border-lightGray h-1" />
      <div
        className={`slideMenu z-10 bg-lightGray h-screen border-2 border-lightGray  border-r-gray-700 absolute w-[50%] 1.5xl:w-[25%] sm:w-[35%] py-5 text-start shadow-r-md rounded-r-lg ${
          props.menu ? "left-0" : "left-[-450px] sm:left-[-550px]"
        } transition-all duration-500 ease-in-out z-10 mt-[-2px]`}
      >
        <ul className="mt-5 flex flex-col justify-center items-center space-y-4">
          <li
            className="rounded-3xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="/">Top Stories</Link>
          </li>
          <li
            className="rounded-3xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="business">Business</Link>
          </li>
          <li
            className="rounded-2xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="entertainment">Entertainment</Link>
          </li>
          <li
            className="rounded-2xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="general">General</Link>
          </li>
          <li
            className="rounded-2xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="health">Health</Link>
          </li>
          <li
            className="rounded-2xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="science">Science</Link>
          </li>
          <li
            className="rounded-2xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="sports">Sports</Link>
          </li>
          <li
            className="rounded-2xl hover:bg-gray-600 text-center w-full py-2 cursor-pointer"
            onClick={handleClick}
          >
            <Link to="technology">Technology</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
