import "../../App.css";

function CarouselCard() {
  return (
    <div>
      <div>
        <div className=" py-8   flex    pl-14 md:justify-between items-center">
          <div className=" relative right-10 z-10" id="card image">
            <img
              className="  shadow-green-700 shadow-lg w-[400px] h-[150px] md:w-[500px] md:h-[350px] rounded-lg object-cover"
              src="/plant.jpg"
            />
          </div>
          <div
            id="rest-carousel"
            className="relative   -top-1  -left-12 pl-4 md:-left-16    z-0  p-2 md:py-[20px] md:px-[50px] bg-darkBg flex items-start flex-col gap-4"
          >
            <div className=" ">
              <div
                className=" leading-8 text-mygray font-medium text-sm flex items-center"
                id=" for title date description"
              >
                <p className=" text-xs md:text-[16px] font-semibold">
                  Business
                </p>
                <p className="text-xs">-</p>
                <p className=" text-xs">July 2, 2020</p>
              </div>
              <p className="  text-sm md:text-[40px] leading-snug font-semibold text-myWhite">
                Your most unhappy customers are your greatest source of learning
              </p>
              <p className=" hidden md:block text-sm md:leading-10  md:text-[14px] font-medium opacity-75  text-mygray">
                Far far away,behind the world mountains, far from the countries
                Vokalia and Consonantia, there live the vlind texts.
              </p>
            </div>
            <div className="flex gap-2 items-center" id="user detail">
              <img
                className=" w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/plant.jpg"
              />
              <div
                className=" flex flex-col gap-1"
                id="for user name and member"
              >
                <p className=" text-xs md:text-[14px] text-myWhite font-semibold">
                  Sergy Camplell
                </p>
                <p className=" text-xs md:text-[13px] text-mygray font-semibold">
                  member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
