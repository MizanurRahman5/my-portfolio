import React, { useEffect } from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import project1 from "../assets/modified_image (2).png";
import Section from "../components/Section";
import Container from "../components/Container";
import Flex from "../components/Flex";
import List from "../components/List";
import { Link } from "react-router-dom";

export default function CaseStudyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <Section className="bg-third py-20 md:py-32 ">
      <Container>
        <h2 className="text-black text-3xl md:text-text50 font-semibold font-robo pb-5 text-center">
          A Crowd Funding Application
        </h2>
        <p className=" w-full md:w-[780px] px-4 md:px-4  mx-auto text-black text-sm md:text-lg font-normal font-robo  text-center pb-7 md:pb-14">
          "A Crowd Funding Application" is a web platform connecting donors with
          campaigns, allowing users to create, manage, and support fundraising
          efforts easily.
        </p>
        <a
          href="https://github.com/programming-hero-web-course2/b10-a10-client-side-MizanurRahman5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Project Link" className="flex mx-auto" />
        </a>

        <Image
          src={project1}
          className="mx-auto pt-10 md:pt-20 md:w-[600px] px-12 md:px-0"
        />

        <div className="pt-12 md:pt-16 md:w-[900px] mx-auto px-4 md:px-0">
          <h3 className="text-black text-xl md:text-3xl font-semibold font-robo pb-5 ">
            Project Overview
          </h3>
          <Flex className="flex-col gap-y-5 ">
            <p className="text-black w-full   text-sm md:text-base font-normal font-robo">
              "A Crowd Funding Application" is a comprehensive web platform
              designed to facilitate easy creation, management, and
              participation in donation campaigns. It aims to provide a
              transparent and user-friendly environment where donors can
              contribute to causes effectively.
            </p>
            <p className="text-black w-full   text-sm md:text-base font-normal font-robo">
              This application simplifies the process of crowdfunding by
              enabling individuals and organizations to connect with potential
              donors. It fosters a sense of community and encourages
              transparency in fundraising efforts, making it an ideal solution
              for social causes. Let me know if you'd like to add or modify
              anything!
            </p>

            <p className="text-black w-full   text-sm md:text-base font-normal font-robo">
              Feel free to check out the Project by visiting the Project Link.
            </p>
          </Flex>
          <h4 className="text-black text-xl md:text-3xl font-semibold font-robo py-12 ">
            Tools Used
          </h4>
          <div className="flex flex-wrap gap-x-4 md:items-center ">
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              React
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              Tailwind
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              JavaScript
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              Firebase
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              Node js
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              Express
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              MongoDB
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              GIT
            </li>
            <li className="mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium">
              Github
            </li>
          </div>
          <h4 className="text-black text-xl md:text-3xl font-semibold font-robo py-6 md:py-10 ">
            See Live
          </h4>
          <Flex className="gap-x-8">
            <a
              href="https://crowdcube-fa18e.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Project Live" />
            </a>
            <Link to="/">
              <Button text="Go Back" />
            </Link>
          </Flex>
        </div>
      </Container>
    </Section>
  );
}
