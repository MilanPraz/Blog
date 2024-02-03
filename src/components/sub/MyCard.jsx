import { baseUrl } from "../../features/constant";

function MyCard({ blog }) {
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
    <div>
      <div>
        <div className="   flex  gap-2 items-center">
          <div className=" relative  z-10" id="card image">
            <img
              className=" w-64 h-32  md:w-[400px] md:h-[172px] rounded-s-lg  shadow-lg
                object-cover"
              src={`${baseUrl}/${image}`}
            />
          </div>
          <div className=" self-start w-full h-full shadow-lg   z-20 overflow-hidden rounded-e-md py-[20px] pl-[20px] pr-[35px] bg-darkBg flex flex-col items-start  gap-4">
            <div>
              <div
                className=" text-myBlue font-medium text-sm flex gap-1 items-center"
                id=" for title date description"
              >
                <p className=" text-xs md:text-[16px] font-semibold">
                  {category}
                </p>
                <p>-</p>
                <p className=" text-xs">{blogDate}</p>
              </div>
              <p className=" text-sm md:text-[18px] font-semibold text-myWhite">
                {title}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className=" text-xs md:text-[14px] font-medium  indent-0 line-clamp-4  opacity-75  text-mygray"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
