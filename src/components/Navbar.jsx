import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { baseUrl } from "../features/constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const navbarData = [
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/create",
    title: "Create a Blog",
  },
  {
    path: "/login",
    title: "Let's Get Started",
  },
];

function Navbar() {
  const userJSON = localStorage.getItem("user");
  const userDetail = JSON.parse(userJSON);
  const navigate = useNavigate();

  const [openNavbar, setOpenNavbar] = useState(false);

  function handleToggle() {
    setOpenNavbar(!openNavbar);
  }

  return (
    <>
      <nav className="bg-mainBg ">
        <div className=" container mx-auto   py-4    text-base text-myBlue leading-6 flex items-center  justify-between">
          <Link className=" text-2xl font-bold" to={"/"}>
            LOGO
          </Link>
          <div className=" md:flex hidden items-center">
            {userDetail && (
              <div
                onClick={() => navigate(`/${userDetail.username}/dashboard`)}
                className=" flex cursor-pointer  items-center gap-2"
              >
                <p>
                  Hello,<span>{userDetail?.username}</span>
                </p>
                <img
                  className=" h-12 w-12 object-cover rounded-full"
                  src={`${baseUrl}/${userDetail?.image}`}
                />
              </div>
            )}
            <div>
              <ul className=" list-none flex gap-4 font-medium">
                {navbarData.map((data, index) => {
                  return (
                    <li
                      key={index}
                      className=" text-mygray  overflow-hidden relative z-40"
                    >
                      <Link
                        className={`leading-8 font-semibold w-[180px] px-4 py-2 overflow-hidden text-mygray relative z-40 ${
                          index === 2 && "getstartedBtn"
                        }`}
                        to={`${data.path}`}
                      >
                        {data.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            className=" md:hidden  cursor-pointer"
            onClick={() => handleToggle()}
          >
            {openNavbar ? (
              <ImCross className=" text-xl" />
            ) : (
              <GiHamburgerMenu className=" text-lg " />
            )}
          </div>
        </div>

        <div
          className={` md:hidden  grid overflow-hidden   ${
            openNavbar ? "  h-52 " : "  h-0 opacity-0 "
          } items-center transition-all duration-300 ease-in-out`}
        >
          {userDetail && (
            <div
              onClick={() => navigate(`/${userDetail.username}/dashboard`)}
              className=" overflow-hidden flex cursor-pointer  items-center gap-2"
            >
              <p>
                Hello,<span>{userDetail?.username}</span>
              </p>
              <img
                className=" h-12 w-12 object-cover rounded-full"
                src={`${baseUrl}/${userDetail?.image}`}
              />
            </div>
          )}
          <div className=" overflow-hidden">
            <ul className=" overflow-hidden list-none flex flex-col gap-4 font-medium">
              {navbarData.map((data, index) => {
                return (
                  <li
                    onClick={() => handleToggle()}
                    key={index}
                    className=" text-mygray  overflow-hidden relative z-40"
                  >
                    <Link
                      className={`leading-8 font-semibold w-[180px] px-4 py-2 overflow-hidden text-mygray relative z-40 ${
                        index === 2 && "getstartedBtn"
                      }`}
                      to={`${data.path}`}
                    >
                      {data.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {/* this is for mobile */}
      {/* {openNavbar && ( */}

      {/* )} */}
    </>
    // </Headroom>
  );
}

export default Navbar;
