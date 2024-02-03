import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../features/blogApi";
import { baseUrl } from "../features/constant";
import { useEffect } from "react";

function SingleBlog() {
  const params = useParams();
  console.log(params.id);

  const { data, refetch, error } = useGetBlogByIdQuery({ id: params.id });
  console.log("single blog detail", data);
  console.log("eerorr is", error);
  useEffect(() => {
    refetch();
  }, [params.id, refetch]);

  return (
    <div className=" mt-14 mb-20">
      <div className=" flex flex-col  items-center justify-center gap-4">
        <h2 className=" text-2xl md:text-5xl w-3/4 mx-auto drop-shadow-md mb-4  text-center font-bold text-myBlue ">
          {data?.title}
          <hr className=" mt-2 h-[1px]  bg-slate-200 w-3/4 mx-auto" />
        </h2>
        <div>
          <img
            className=" max-w-3/4 rounded-lg  object-cover object-top drop-shadow-lg  mx-auto max-h-[500px]"
            src={`${baseUrl}/${data?.image}`}
            alt="pp"
          />
        </div>
        <div>
          <p
            className="  md:w-3/4 mx-auto text-lg text-center  text-myBlue  font-light leading-loose "
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
