import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { Search } from "../assets/icons/search.jsx";
import { Shop } from "../assets/icons/shop";

export const Header = () => {
  return (
    <>
      <div className="container flex justify-between items-center gap-[130px] quotes my-[69px]">
        <div className="flex justify-between items-center gap-[150px]">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <div className="flex gap-10 text-[20px] font-bold">
              <NavLink
                className={({ isActive }) => (isActive ? "text-green" : "")}
                to="/"
              >
                <p>Home</p>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-green" : "")}
                to="about"
              >
                <p>About</p>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-green" : "")}
                to="pagges"
              >
                <p>Pages</p>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-green" : "")}
                to="shop"
              >
                <p>Shop</p>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-green" : "")}
                to="projects"
              >
                <p>Projects</p>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-green" : "")}
                to="news"
              >
                <p>News</p>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-[18px]">
          <div className="">
            <form className="relative">
              <input
                className="bg-smoke w-[376px] h-[66px] rounded-[36px] pl-7 pr-20 outline-none"
                type="text"
              />
              <button
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-green p-[18px] rounded-full"
                type="submit"
              >
                <Search />
              </button>
            </form>
          </div>
          <div className="flex justify-between items-center gap-3 p-[5px] border border-gray rounded-[33px]">
            <div className="bg-primary p-[15px] rounded-full">
              <Shop />
            </div>
            <div className="pr-2.5 font-semibold text-primary text-[18px]">Cart (0)</div>
          </div>
        </div>
      </div>
    </>
  );
};
