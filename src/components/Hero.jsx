import React from 'react'
import { Link } from 'react-router'
import appstore from "../assets/appstore.svg"
import playstore from "../assets/playsotre.svg"

const Hero = () => {
  return (
    <div>
        <div>
            <h1 className='text-5xl text-center font-semibold mt-10'>We Build <br /> <span className='text-gradiendt font-extrabold'>Productive</span> Apps</h1>
            <p className='text-center text-gray-500 mt-5 font-light text-sm'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-3 mt-5'>

                <Link to="https://www.apple.com/app-store/" className='flex items-center border py-[6px] px-3 gap-2 border-gray-400 rounded-sm'>
                    <img src={appstore} alt="" />
                    <h2>App Store</h2>
                </Link>
                <Link to='https://play.google.com/' className='flex items-center border py-[6px] px-3 border-gray-400 rounded-sm'>
                    <img src={playstore} alt="" />
                    <h2>Google Play</h2>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Hero 