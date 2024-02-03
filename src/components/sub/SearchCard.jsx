import { useSearchParams } from "react-router-dom";
import "../../App.css";
import { baseUrl } from "../../features/constant";

function SearchCard({ blog }) {
  console.log(blog);
  const {
    title,
    description,
    creatorPic,
    creatorName,
    blogDate,
    category,
    image,
  } = blog;
  return (
    <div className=" mx-auto">
      <div className="   flex flex-col justify-between  items-center">
        <div className=" relative md:right-10 z-10" id="card image">
          <img
            className=" w-[300px] h-[200px] md:w-[400px] md:h-[257px] rounded-lg drop-shadow-sm object-cover"
            src={`${baseUrl}/${image}`}
          />
        </div>
        <div
          id="rest"
          className="relative w-[300px] md:w-[380px] -top-10 left-2 md:-left-5 z-20 overflow-hidden py-[40px] pl-[50px] pr-[35px] bg-darkBg flex items-start flex-col gap-4"
        >
          <div>
            <div
              className=" text-myBlue font-medium text-sm flex items-center"
              id=" for title date description"
            >
              <p className=" text-xs md:text-[16px] font-semibold">
                {category}
              </p>
              <p>-</p>
              <p>{blogDate}</p>
            </div>
            <p className=" text-sm md:text-[18px] font-semibold text-myWhite">
              {title}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className=" text-xs md:text-[14px] font-medium  indent-0 line-clamp-4  opacity-75  text-mygray"
            ></p>
          </div>
          <div className="flex gap-2 items-center" id="user detail">
            <img
              className=" w-10 h-10  md:w-16 md:h-16 rounded-full"
              src={`${baseUrl}/${creatorPic}`}
            />
            <div className=" flex flex-col gap-1" id="for user name and member">
              <p className=" text-xs md:text-[14px] text-myWhite font-semibold">
                {creatorName}
              </p>
              <p className=" text-xs md:text-[13px] text-mygray font-semibold">
                member
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
