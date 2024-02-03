import Card from "./sub/Card";
import "../App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./sub/CarouselCard";
import Hero from "./Hero";
import { useEffect, useRef, useState } from "react";

import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { useGetAllBlogsQuery } from "../features/blogApi";
import { useNavigate } from "react-router-dom";
import SearchCard from "./sub/SearchCard";

function Home({ blogs }) {
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const trendingInView = useRef();
  useEffect(() => {
    const added = trendingInView?.current?.classList.add("hoverit");

    console.log(added);
  }, []);

  // console.log()
  console.log(trendingInView);

  return (
    <>
      <Hero />
      <div className="pb-12 pt-8 sm:pt-2">
        <div className=" flex items-center justify-center overflow-hidden relative z-0 ">
          <h2
            ref={trendingInView}
            id="trending"
            className={` text-[2rem] md:text-[4rem]  text-center font-bold leading-9 tracking-wider md:w-[420px] rounded-lg  p-4  md:py-8 md:px-2 trending_slide    `}
          >
            TRENDING
          </h2>
        </div>
        <section className="py-12">
          <Slider {...settings}>
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
          </Slider>
        </section>
        <section className=" py-12 flex flex-col items-center  justify-center  gap-4 sm:flex  md:grid md:grid-cols-3  md:gap-x-8 md:gap-y-12 relative z-0">
          {/* <section className=" relative z-0 py-12 flex flex-col gap-4   md:grid md:grid-cols-3  md:gap-x-8 md:gap-y-12"> */}
          {blogs &&
            blogs[0].data?.slice(0, 3).map((blog) => {
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
          {/* </section> */}
        </section>
      </div>
    </>
  );
}

export default Home;
