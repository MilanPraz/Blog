import "../App.css";

function Hero() {
  return (
    <div className=" relative -top-36 md:pt-32">
      <div className=" w-full">
        <h2 className=" w-full text-[5rem] md:text-[10rem]  text-center font-bold leading-loose tracking-wider ">
          DAILY
          <span id="milan">-</span>
          <span id="milan" className=" ">
            BLOGS.
          </span>
        </h2>
      </div>
      <div>
        <p className="  leading-8 text-myBlue font-thin text-xl md:text-3xl text-right">
          {" "}
          Welcome to a space
          <br /> where your words matter.
        </p>
      </div>
    </div>
  );
}

export default Hero;
