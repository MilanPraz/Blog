import { useForm } from "react-hook-form";
import { useGetAllBlogsQuery } from "../features/blogApi";
import Card from "./sub/Card";
import SearchCard from "./sub/SearchCard";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Pagination from "rc-pagination/lib/Pagination";
import "../App.css";

function Blogs() {
  const [currentSearchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [paginationData, setPaginationData] = useState({
    total: 10,
    page: 1,
    perPage: 6,
  });
  const params = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   if (params.search) {
  const memoizedSearch = useMemo(() => params.search, [params.search]);
  const { data, error, isSuccess, isLoading } =
    useGetAllBlogsQuery(memoizedSearch);

  //   const { data, error, isSuccess, isLoading } = useGetAllBlogsQuery(
  //     params.search
  //   );
  console.log(isLoading);
  console.log(isSuccess);
  console.log(error);
  console.log(data);
  if (isSuccess) {
    console.log(data[0]?.data);
    // setBlogs(data[0]?.data);
  }
  //   }
  console.log(currentSearchParams.get("search"));
  console.log(params);
  console.log(params.search);
  return (
    <section className="mt-40 mb-20">
      {/* head part */}
      <div>
        <form className=" flex flex-col gap-4 md:gap-0 md:flex-row items-center md:justify-between">
          <input
            name="search"
            onChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              currentSearchParams.set("search", e.target.value);
              setSearchParams(currentSearchParams);
              console.log(currentSearchParams.get("search"));
            }}
            className="px-2 text-myBlue  text-sm leading-8 py-1 outline-none md:w-96 bg-myWhite rounded-lg "
            placeholder=" search a blog "
          />
          <p
            id="trending"
            className=" capitalize tracking-wider  text-3xl font-bold"
          >
            SEARCH a BLOG
          </p>
          <select
            name="category"
            onChange={(e) => {
              e.preventDefault();
              currentSearchParams.set("category", e.target.value);
              setSearchParams(currentSearchParams);
            }}
            className="block py-2 px-2 leading-8  md:w-96 text-sm text-myBlue bg-myWhite rounded-md border-0 border-b-2 border-gray-200  cursor-pointer focus:outline-none focus:ring-0 focus:border-myBlue "
            placeholder="Select a Category"
          >
            <option defaultValue={""} value={""}>
              Select a category
            </option>
            <option value="business">Business</option>
            <option value="tourism">Tourism</option>
            <option value="healthCare">Health-Care</option>
            <option value="economy">Economy</option>
            <option value="politics">Politics</option>
            <option value="motivation">Motivation</option>
            <option value="educational">Educational</option>
            <option value="religion">Religion</option>
          </select>
        </form>
      </div>

      {/* searched blogs */}
      <div className=" mt-8">
        <section className=" relative z-0 py-12 flex flex-col gap-4   md:grid md:grid-cols-3  md:gap-x-8 md:gap-y-12">
          {isSuccess &&
            data[0].data?.map((blog) => {
              return (
                <div
                  className=" cursor-pointer"
                  onClick={() => navigate(`/blogs/detail/${blog._id}`)}
                  key={blog._id}
                >
                  <SearchCard blog={blog} />
                </div>
              );
            })}
        </section>
        {/* for pagination  */}
        <section className=" mt-10">
          <Pagination
            total={paginationData.total}
            pageSize={paginationData.perPage}
            prevIcon="<"
            nextIcon=">"
            onChange={(pgNumber) => {
              console.log(pgNumber);
              currentSearchParams.set("page", pgNumber);
              setSearchParams(currentSearchParams);
            }}
          />
        </section>
      </div>
    </section>
  );
}

export default Blogs;
