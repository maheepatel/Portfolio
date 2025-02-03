"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Blockchain",
    title: "NFTLanding",
    Description:
      "Built an artist portfolio for showcasing and minting NFTs on Solana, using Anchor & Rust for smart contracts and React & SCSS for the frontend. Integrated Solana Wallet Adapter for wallet management and @coral-xyz/anchor for client-side interactions.",
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
      "Developed the frontend of Supply Sphere, a blockchain supply chain management platform, using React, TypeScript, and MUI. Integrated smart contracts with the frontend using the Wagmi library for real-time data tracking, overcoming challenges through documentation support.",
    stack: [
      { name: "ReactJS" },
      { name: "MUI" },
      { name: "Solidity" },
      { name: "Typescript" },
      { name: "WagmiJS" },
    ],
    image: "/assets/work/supplysphere.png",
    live: "https://drive.google.com/file/d/1ZF-rysvAdvCWHOu8wp8k02SOsHXk6UKV/view?usp=drive_link",
    github: "https://github.com/orgs/SupplySphereSCM/repositories",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Scholar connect",
    Description:
      "Developed Scholar Connect, a platform for researchers to share publications, articles, and workshop details. Overcame challenges in handling forms for different sections by using Formik for efficient form management.",
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
      "Built a fun Meme Generator using React JS, allowing users to create memes by selecting images or using the IMGFLIP API to generate funny images.",
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
