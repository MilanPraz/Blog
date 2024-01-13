import Card from "./sub/Card";
import "../App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./sub/CarouselCard";
import Hero from "./Hero";
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Hero />
      <div className="pb-12 pt-28">
        <h2
          id="trending"
          className="text-[4rem] text-center font-bold leading-9 tracking-wider  "
        >
          TRENDING
        </h2>
        <section className="py-12">
          <Slider {...settings}>
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
          </Slider>
        </section>
        <section className=" py-12 grid grid-cols-3  gap-x-8 gap-y-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </>
  );
}

export default Home;
