import "../../App.css";

function Card() {
  return (
    <div>
      <div className="   flex flex-col justify-between items-center">
        <div className=" relative right-10 z-10" id="card image">
          <img
            className=" w-[400px] h-[257px] rounded-lg drop-shadow-sm object-cover"
            src="/plant.jpg"
          />
        </div>
        <div
          id="rest"
          className="relative -top-10 -left-5 z-20 overflow-hidden py-[40px] pl-[50px] pr-[35px] bg-darkBg flex items-start flex-col gap-4"
        >
          <div>
            <div
              className=" text-myBlue font-medium text-sm flex items-center"
              id=" for title date description"
            >
              <p className=" text-[16px] font-semibold">Business</p>
              <p>-</p>
              <p>July 2, 2020</p>
            </div>
            <p className=" text-[18px] font-semibold text-myWhite">
              Your most unhappy customers are your greatest source of learning
            </p>
            <p className=" text-[14px] font-medium  opacity-75  text-mygray">
              Far far away,behind the world mountains, far from the countries
              Vokalia and Consonantia, there live the vlind texts.
            </p>
          </div>
          <div className="flex gap-2 items-center" id="user detail">
            <img className=" w-16 h-16 rounded-full" src="/plant.jpg" />
            <div className=" flex flex-col gap-1" id="for user name and member">
              <p className=" text-[14px] text-myWhite font-semibold">
                Sergy Camplell
              </p>
              <p className=" text-[13px] text-mygray font-semibold">member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
