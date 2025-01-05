import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaYoutube,FaFacebookF,FaGithub,FaTwitter,FaLinkedinIn } from 'react-icons/fa'
import List from '../components/List'
import logo from '../assets/vecteezy_mr-logo-design_-modified.png'
import Image from '../components/Image'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Section className='bg-black pt-12 md:pt-20'>
    <Container>
      <div className='md:flex md:justify-between'>
        <div className='md:w-6/12 mx-4'>
          <Flex className='gap-x-5 items-center pb-7 md:pb-24 sm:mx-10'>
            <Link to='/'>
            <Image src={logo} className="w-[70px] md:w-[90px]"/>
            </Link>
            <Link to='/'>
            <h4 className=' text-xl md:text-2xl lg:text-4xl text-white font-robo font-semibold'>M. RAHMAN</h4>
            </Link>
          </Flex>
          <Flex className='gap-x-4 pl-14'>
            <Link to='https://www.linkedin.com'>
            <FaLinkedinIn className='text-white text-xl md:text-3xl'/>
            </Link>
            <Link to='https://github.com/MizanurRahman5'>
            <FaGithub className='text-white text-xl md:text-3xl'/>
            </Link>
            <Link to='https://www.facebook.com'>
            <FaFacebookF className='text-white text-xl md:text-3xl'/>
            </Link>
            <Link to='https://twitter.com'>
            <FaTwitter className='text-white text-xl md:text-3xl'/>
            </Link>
            <Link>
            <FaYoutube className='text-white text-xl md:text-3xl'/>
            </Link>
          </Flex>

        </div>
        <div className='mx-20 md:mx-0 pt-10  md:w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-5 md:pb-9'>TOP FEATURES</h6>
         <ul className='flex flex-col gap-y-2'>
          <List className='text-sm text-white font-normal font-robo' text='E-Commerce' />
          <List className='text-sm text-white font-normal font-robo' text='Corporate' />
          <List className='text-sm text-white font-normal font-robo' text='Personal' />
          <List className='text-sm text-white font-normal font-robo' text='Social Media' />
         <List className='text-sm text-white font-normal font-robo' text='Chating Application' />
         </ul>
        </div>
        <div className='hidden md:block pt-10 w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>PRODUCT</h6>
         <ul className='flex flex-col gap-y-2'>
         <List className='text-sm text-white font-normal font-robo' text='Orebi' />
          <List className='text-sm text-white font-normal font-robo' text='TalksME' />
          <List className='text-sm text-white font-normal font-robo' text='Avada' />
          <List className='text-sm text-white font-normal font-robo' text='Innovate' />
         </ul>
        </div>
        
        <div className='hidden md:block pt-10 w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>ABOUT US</h6>
         <ul className='flex flex-col gap-y-2 '>
         <List className='text-sm text-white font-normal font-robo' text='About us' />
          <List className='text-sm text-white font-normal font-robo' text='Contact us' />
          <List className='text-sm text-white font-normal font-robo' text='Our Services' />
         </ul>
        </div>
        
      </div>
      <p className='text-center text-sm text-white font-pop font-normal pt-10 pb-16  md:py-24'>Copyright 2025. Made by <u><span className='font-semibold underline-offset-1'>M. RAHMAN</span></u></p>
    </Container>
   </Section>

  )
}
