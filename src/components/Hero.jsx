import "../App.css";

function Hero() {
  return (
    <div className=" pt-32">
      <div>
        <h2 className=" text-[10rem] text-center font-bold leading-loose tracking-wider ">
          DAILY
          <span id="milan">-</span>
          <span id="milan" className=" ">
            BLOGS.
          </span>
        </h2>
      </div>
      <div>
        <p className="  leading-8 text-myBlue font-thin text-3xl text-right">
          {" "}
          Welcome to a space
          <br /> where your words matter.
        </p>
      </div>
    </div>
  );
}

export default Hero;
