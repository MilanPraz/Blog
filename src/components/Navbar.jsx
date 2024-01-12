import { Link } from "react-router-dom";

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
    title: "Login",
  },
];

function Navbar() {
  return (
    <nav className="container  bg-mainBg   py-4    text-base text-myBlue leading-6 flex items-center  justify-between">
      <Link className=" text-2xl font-bold" to={"/"}>
        LOGO
      </Link>
      <div>
        <ul className=" list-none flex gap-4 font-medium">
          {navbarData.map((data, index) => {
            return (
              <li key={index} className=" text-mygray">
                <Link
                  className=" leading-8 font-semibold text-mygray"
                  to={`${data.path}`}
                >
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
