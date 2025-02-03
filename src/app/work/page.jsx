"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Blockchain",
    title: "NFTLanding",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus iure aut!",
    stack: [
      { name: "React" },
      { name: "Scss" },
      { name: "Anchor" },
      { name: "Rust" },
      { name: "Metaplex" },
    ],
    image: "/assets/work/NFTLanding.png",
    live: "https://rinkya-designs.vercel.app/",
    github: "https://github.com/maheepatel/NFT_Platform_On_Solana",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Supplysphere",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus iure aut!",
    stack: [
      { name: "ReactJS" },
      { name: "MUI" },
      { name: "Solidity" },
      { name: "Typescript" },
      { name: "WagmiJS" },
    ],
    image: "/assets/work/supplysphere.png",
    live: "",
    github: "https://github.com/maheepatel/NFT_Platform_On_Solana",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Scholar connect",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus iure aut!",
    stack: [
      { name: "React" },
      { name: "CSS" },
      { name: "formik" },
      { name: "NodeJS" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/ScholarConnect_home.png",
    live: "https://scholarconnect.vercel.app/",
    github: "https://github.com/maheepatel/Scholar-Connect",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Meme Generator",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus iure aut!",
    stack: [{ name: "React" }, { name: "css" }, { name: "IMGFlip API" }],
    image: "/assets/work/MemeGenerator.png",
    live: "https://resonant-alfajores-015d7f.netlify.app/",
    github:
      "https://github.com/maheepatel/Meme-generator/tree/main/meme-generator",
  },
];

const page = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80hv] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none"
          >
            <div className="h-[50%] flex flex-col gap-[30px]">
              {/*  outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent 
              text-outline "
              >
                {project.num}
              </div>
              {/* Project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.title} project
              </h2>
              {/* Project description */}
              <p className="text-white/60">{project.Description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github repo button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={project.image}
                          fill
                          // objectFit="cover"
                          className=" w-full "
                          alt="Image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between 
              xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] 
              flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
