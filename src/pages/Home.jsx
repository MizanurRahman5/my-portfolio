import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import { motion } from 'framer-motion';
import Image from '../components/Image'
import aboutImage from '../assets/bg.jpg'
import Flex from '../components/Flex'
import Education from '../components/icons/Education'
import { TiStarburst } from 'react-icons/ti'
import { BsArrowRight } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import { FaBookOpen, FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import { BiSolidMessageRounded } from 'react-icons/bi'
import { MdWavingHand } from 'react-icons/md'
import Typewriter from 'typewriter-effect';
import { Typed } from 'react-typed';

import project1 from '../assets/modified_image.png'
import project2 from '../assets/modified_image (1).png'
import project3 from '../assets/modified_image (2).png'
import CV from '../assets/Mizanur Rahman Resume.pdf'


import ServiceCard from '../components/ServiceCard'
import ProjectSecond from '../components/ProjectSecond'
import { Link, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import ContactForm from '../components/Contact'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  })

  return (
    <>
      <div className=' fixed right-[12px] md:right-[70px] lg:right-[25px] bottom-[16px] md:bottom-[40px] lg:bottom-[15px] flex justify-center items-center gap-x-1 md:gap-x-4 z-10'>
        <div>
          <button className='bg-four py-1 px-2 lg:py-2 lg:px-4 rounded-xl font-robo text-xs md:text-sm drop-shadow-2xl flex justify-center items-center gap-x-2'>Chat with Me <MdWavingHand className='text-yellow-500 md:text-base' /></button>
        </div>
        <div className='bg-secondary rounded-full md:w-[45px] lg:w-[60px] w-[30px] h-[30px] md:h-[45px] lg:h-[60px] flex justify-center items-center drop-shadow-2xl'>
          <BiSolidMessageRounded className='md:text-[27px] text-white' />
        </div>
      </div>

      <Section className='bg-primary  pb-20 md:pb-40 relative' >
        {/* <div className='bg-banner h-screen bg-no-repeat bg-center bg-cover'></div> */}
        <Container>
      <div id="hero">
        <h2 className='text-[27px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-text50 pt-12 text-black font-pop font-semibold md:pt-28 lg:pt-32 xl:pt-40 md:bg-6 lg:pb-8 pb-4 text-center mx-1.5'>
          <Typewriter
            onInit={(writer) => {
              writer.typeString('HEY, I\'M MIZANUR RAHMAN')
                .pauseFor(1000)  // 1 সেকেন্ড বিরতি
                .deleteAll()     // সবকিছু মুছে ফেলবে
                .pauseFor(500)   // পুনরায় টাইপিং শুরু করার জন্য একটু বিরতি
                .start();        // টাইপিং শুরু হবে
            }}
            options={{
              loop: true,  // টাইপিং একাধিক বার হবে
            }}
          />
        </h2>
        <p className='text-center mx-auto px-5 md:w-w725 sm:leading-7 md:leading-7 md:leading-10 text-sm md:text-base lg:text-lg text-black font-robo font-normal mx-1.5 sm:mx-4 md:mx-auto'>
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
        </p>

        <a href={CV} download="" className='flex mt-6 justify-center'>
          <Button text="Download CV" className='px-12' />
        </a>
      </div>
    </Container>
        <div className=' bg-third h-[120px] w-[10px] sm:w-[30px] sm:h-[165px] sm:top-[190px] md:h-[210px] lg:h-[270px] md:w-[30px] lg:w-[40px] absolute left-0 top-[226px] md:top-[220px] lg:top-[90px] flex flex-col justify-between items-center p-3 md:p-5  lg:p-7 drop-shadow-xl '>
          <Link to="https://www.linkedin.com">
            <AiFillLinkedin className='sm:text-xl md:text-[26px] lg:text-[34px]' />
          </Link>

          <Link to='https://github.com/MizanurRahman5'>
            <AiOutlineGithub className='sm:text-xl md:text-[26px] lg:text-[34px]' />
          </Link>

          <Link>
            <FaYoutube className='sm:text-xl md:text-[26px] lg:text-[30px]' />
          </Link>

          <Link to='https://twitter.com'>
            <AiOutlineTwitter className='sm:text-xl md:text-[26px] lg:text-[34px]' />
          </Link>

          <Link to="https://web.facebook.com/md.misty.75">
            <FaFacebookSquare className='text-sm sm:text-xl md:text-[26px] lg:text-[30px]' />
          </Link>
        </div>
      </Section>


      <Section className='bg-third py-14 md:py-28'>
      <Container>
        <div id="about">
          <div className='pb-14'>
            <h2 className='text-3xl sm:text-4xl md:text-[36px] lg:text-text50 text-black font-normal font-robo text-center'>ABOUT ME</h2>
            <p className='lg:w-w806 sm:mx-4 lg:mx-auto text-center mx-auto text-sm md:text-base lg:text-lg text-black font-robo font-normal px-4 pt-4 sm:leading-7'>
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </p>
          </div>

          {/* motion.div সঠিকভাবে ব্যবহার */}
          <motion.div
            initial={{ opacity: 0, y: 100 }} // শুরুতে সম্পূর্ণ অদৃশ্য এবং নিচ থেকে আসবে
            animate={{ opacity: 1, y: 0 }}   // আনা হলে পূর্ণ দৃশ্যমান এবং সোজা হয়ে যাবে
            transition={{ duration: 1.2 }}   // 1.2 সেকেন্ডে এ্যানিমেশন হবে
          >
            <Flex className='md:px-10 lg:px-4 xl:px-0'>
              <div className='w-1/2 hidden md:block flex rounded items-center'>
                <Image src={aboutImage} className='md:w-[80%] rounded-md' />
              </div>

              <div className='w-full md:w-1/2'>
                <Flex className='justify-between gap-x-2 md:gap-x-2 lg:gap-x-2 px-4 sm:px-12 md:px-0 lg:px-0'>
                  <div className='bg-four rounded-lg drop-shadow-lg w-w270 pb-4 md:h-h150'>
                    <Education className="flex justify-center mx-auto pt-3 md:pt-4 w-w20 h-h20" />
                    <h3 className='text-black text-sm lg:text-xl font-robo font-medium text-center pt-4 md:pt-6'>Hobbies</h3>
                    <p className='text-five text-xs lg:text-base font-robo font-normal text-center pt-1 md:pt-2'>Coding</p>
                    <p className='text-five text-sm lg:text-base font-robo font-normal text-center'>Development</p>
                  </div>

                  <div className='bg-four rounded-lg drop-shadow-lg w-w270 pb-4 md:h-h150'>
                    <Education className="flex justify-center mx-auto pt-3 md:pt-4 w-w20 h-h20" />
                    <h3 className='text-black text-sm lg:text-xl font-robo font-medium text-center pt-4 md:pt-6'>Education</h3>
                    <p className='text-five text-xs lg:text-base font-robo font-normal text-center pt-1 md:pt-2'>Diploma</p>
                  </div>
                </Flex>

                <p className='w-full md:text-left text-center px-4 md:px-0 text-black text-sm md:text-base lg:text-lg font-normal font-robo pt-10 pb-8 sm:leading-7 sm:px-4 md:mx-auto'>
                  I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                </p>

                <ScrollLink to="project" spy={true} smooth={true} offset={50} duration={1200}>
                  <Button text="View Project" className='flex mt-4 max-sm:mx-auto sm:mt-10' />
                </ScrollLink>
              </div>
            </Flex>
          </motion.div>
        </div>
      </Container>
    </Section>



      <Section className='bg-third pt-2 md:pt-5 md:pb-16'>
        <Container>
          <h2 className='text-black text-3xl sm:text-4xl md:text-[36px] lg:text-text50 font-medium font-robo pb-1 md:pb-3 text-center'>Skills</h2>
          <p className='text-black text-base md:text-lg font-normal font-robo text-center'>My technical level</p>

          <div className='lg:justify-evenly lg:flex px-4 sm:px-24'>
            <div className=' lg:w-[430px] pb-7 lg:h-[280px] rounded-xl drop-shadow-2xl bg-four md:mx-24 lg:mx-4 xl:mx-0 mt-10 lg:mt-16'>
              <h4 className='pt-8 pb-8 text-center text-xl text-black font-robo font-normal'>Frontend developer</h4>

              <Flex className='flex-wrap '>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>HTML</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>Tailwind</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>Css</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>JavaScript</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>Bootstrap</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>React</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
              </Flex>
            </div>
            <div className=' lg:w-[430px] pb-7 lg:h-[280px] rounded-xl drop-shadow-2xl bg-four md:mx-24 lg:mx-4 xl:mx-0 mt-10 lg:mt-16'>
              <h4 className='pt-8 pb-8 text-center text-xl text-black font-robo font-normal'>Backend developer</h4>

              <Flex className='flex-wrap '>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>Node</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>Express</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Basic</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>MongDB</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>Git</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>Firebase</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5' />
                  <div>
                    <h5 className='text-sm text-black font-medium  font-robo'>SQL</h5>
                    <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
              </Flex>
            </div>
          </div>
        </Container>

      </Section>


      <Section className='bg-third py-20'>
        <Container>
          <div id="project">
            <h2 className='text-black text-3xl sm:text-4xl md:text-[36px] lg:text-text50 font-semibold font-robo pb-3 text-center'>PROJECTS</h2>
            <p className='w-full px-4 sm:px-4 md:w-[780px]  mx-auto text-black text-sm md:text-base  lg:text-lg font-normal font-robo  text-center sm:leading-7 '>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

            <div className='md:flex md:justify-between items-center md:pt-5 group/project1'>
              <RouterLink to='/casestudy' className='py-3 px-12 max-sm:flex justify-center'>
                <Image src={project1} className=' rounded-lg border-8  sm:mx-auto' />
              </RouterLink>
              <RouterLink to='/casestudy'>
                <div>
                  <h3 className='group/project1 w:full px-10 md:px-0 md:w-[350px] lg:w-w412 text-black  md:mr-10 lg:mr-0 text-xl md:text-[28px]  lg:text-text45 font-medium font-robo pb-4 md:pb-8 text-center pt-2 sm:px-20 lg:pt-12 md:leading-[42px] lg:leading-[60px]'>Lost and Found is a successful Open-Source  project that I am creating</h3>

                  <RouterLink className='relative group/project1'>

                    <div className='relative hidden md:block'>
                      <Link to='/casestudy' className='text-sm lg:text-lg text-black font-robo font-semibold absolute top-[11px] left-[141px] z-10'>Case Study</Link>
                      <BsArrowRight className='absolute lg:top-[20px] lg:left-[256px] md:top-[14px] md:left-[236px] z-10' />
                      <div className='group-hover/project1:w-[190px] bg-[#93C5FD] w-[68px] h-[50px] absolute top-0 left-[115px] duration-500 ease-in-out'></div>
                    </div>
                  </RouterLink>

                </div>
              </RouterLink>
            </div>
            
            <div className='md:flex md:justify-between items-center md:pt-5 group/project1'>
              <RouterLink to='/casestudy3' className='py-3 px-12 max-sm:flex justify-center'>
                <Image src={project3} className=' rounded-lg border-8  sm:mx-auto' />
              </RouterLink>
              <RouterLink to='/casestudy3'>
                <div>
                  <h3 className='group/project1 w:full px-10 md:px-0 md:w-[350px] lg:w-w412 text-black  md:mr-10 lg:mr-0 text-xl md:text-[28px]  lg:text-text45 font-medium font-robo pb-4 md:pb-8 text-center pt-2 sm:px-20 lg:pt-12 md:leading-[42px] lg:leading-[60px]'>A Crowd Funding Application is a successful Open-Source  project that I am creating</h3>

                  <RouterLink className='relative group/project1'>

                    <div className='relative hidden md:block'>
                      <Link to='/casestudy3' className='text-sm lg:text-lg text-black font-robo font-semibold absolute top-[11px] left-[141px] z-10'>Case Study</Link>
                      <BsArrowRight className='absolute lg:top-[20px] lg:left-[256px] md:top-[14px] md:left-[236px] z-10' />
                      <div className='group-hover/project1:w-[190px] bg-[#93C5FD] w-[68px] h-[50px] absolute top-0 left-[115px] duration-500 ease-in-out'></div>
                    </div>
                  </RouterLink>

                </div>
              </RouterLink>
            </div>
            {/* 3rd Project Start */}

            <div className='md:flex md:justify-between items-center lg:items-start pt-24 md:pt-36 group/project2 '>
              <RouterLink to='/casestudy2' className='py-3 px-12 max-sm:flex justify-center'>
                <Image src={project2} className=' rounded-lg border-8 sm:mx-auto' />

              </RouterLink>
              <RouterLink to='/casestudy2'>
                <div>
                  <h3 className='group/project2 w:full px-10 md:px-0 md:w-[350px] lg:w-w412 text-black text-xl md:mr-10 lg:mr-0  md:text-[28px] lg:text-text45 font-medium font-robo pb-4 md:pb-8 text-center pt-2 sm:px-20 lg:pt-12 md:leading-[42px] lg:leading-[60px]'>Gadget Haven is a convenient online store where you can purchase any products</h3>

                  <RouterLink className='relative group/project2'>
                    <div className='relative hidden md:block'>
                      <Link to='/casestudy2' className='text-sm lg:text-lg text-black font-robo font-semibold absolute top-[11px] left-[141px] z-10'>Case Study</Link>
                      <BsArrowRight className='absolute lg:top-[20px] lg:left-[256px] md:top-[14px] md:left-[236px] z-10' />
                      <div className='group-hover/project2:w-[190px] bg-[#93C5FD] w-[68px] h-[50px] absolute top-0 left-[115px] duration-500 ease-in-out'></div>
                    </div>
                  </RouterLink>

                </div>
              </RouterLink>
            </div>

            {/* Second Project end */}
            {/* Event to Event Project start*/}
            <div className='' id="project2">
              <ProjectSecond />
            </div>
            {/* Event to Event Project start*/}

          </div>
        </Container>
      </Section>



      <Section className='bg-third pt-14  md:pt-24 pb-16'>
        <Container>
          <div id='service'>
            <h2 className='text-3xl sm:text-4xl md:text-[36px] lg:text-text50 text-black font-medium font-robo text-center pb-4'>Services</h2>
            <p className='md:max-w-[850px] text-center px-4 mx-auto text-sm md:text-base  lg:text-lg md:text-lg text-black font-robo font-normal md:pb-16 sm:leading-7'>Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide</p>
            <div className='sm:flex px-10 md:px-10 lg:px-0 sm:gap-x-7 lg:gap-x-0  md:justify-between sm:flex-wrap'>
              <ServiceCard className='mx-auto' heading='E-Commerce' para='Development' />
              <ServiceCard className='mx-auto' heading='Social Media' para='Development' />
              <ServiceCard className='mx-auto' heading='Corporate' para='Development' />
              <ServiceCard className='mx-auto' heading='Personal' para='Development' />
            </div>
          </div>
        </Container>
      </Section>



      <Section className='bg-third pb-16 md:py-24 px-3 sm:px-16'>
        <Container>
          <div id="contact">
            <h2 className='text-2xl sm:text-3xl md:pb-5 md:text-[36px] lg:text-text50 text-black font-medium font-robo text-center pb-2'>CONTACT</h2>
            <p className='md:w-w680 text-center mx-4 md:mx-auto text-sm md:text-base  lg:text-lg text-black font-robo font-normal pb-8 sm:leading-7'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <div className='md:flex md:justify-between '>
              <h3 className='hidden md:inline-block md:w-w412 text-black mx-4  text-xl md:text-[28px]  lg:text-text45 font-medium font-robo pb-3 text-center md:leading-[70px]  md:pt-12 mt-12'>Find Me easily Contact without any technical skills</h3>
              <div className='md:w-[570px] md:h-[470px] bg-four rounded-2xl border-white border-2  '>
                <ContactForm/>
              </div>

            </div>
          </div>
          
        </Container>

      </Section>
    </>
  )
}
