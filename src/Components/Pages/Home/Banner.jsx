import React, { useEffect, useState } from 'react';
import play from '../../../assets/play.png';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {
 useEffect (()=>{
	Aos.init()
 }, [])	


return (
		<>
			<div className="p-20 sm:max-w-xl md:max-w-full lg:max-w-screen lg:min-h-screen bg-purple-100 lg:flex">
				<div className="lg:w-5/12  text-center">
					<img className="h-28 mx-auto pr-5" src={play} alt="" />

					<h1
						className="bg-gradient-to-r from-cyan-500 via-gray-400 to-cyan-400 bg-clip-text text-transparent font-black text-5xl lg:text-7xl pb-5 -mt-3"
						
					>
						KidzLand
					</h1>
					<h1 className="title-2">
						Unlock the doors to a child's imagination and potential
					</h1>
					<p className="text-orange-400  font-medium py-3 text-2xl">
						Every toy is an opportunity for a child to explore, learn, and
						create.
					</p>
				</div>
				<div className="w-full lg:w-5/12 relative lg:hidden">
					<img
						className="h-72 w-96 border-4"
						src="https://i.ibb.co/HKwbM8b/toys1.jpg"
						alt=""
						data-aos="fade-down"
						
					/>
					<img
						className="h-72 w-96 border-4 absolute  top-0 "
						src="https://i.ibb.co/cDwJXxG/toy22.webp"
						alt=""
						data-aos="fade-up"
						data-aos-duration="2000"
					/>
				</div>



				<div className="w-full lg:w-5/12 relative lg:pl-20 hidden lg:block">
					<img
						className="h-72 w-96 border-4"
						src="https://i.ibb.co/HKwbM8b/toys1.jpg"
						alt=""
						data-aos="fade-left"
						
					/>
					<img
						className="h-72 w-96 border-4 absolute lg:bottom-14 lg:-right-48 top-0 lg:top-36"
						src="https://i.ibb.co/cDwJXxG/toy22.webp"
						alt=""
						data-aos="fade-left"
						data-aos-duration="2000"
					/>
				</div>
			</div>
		</>
	);
};

export default Banner;
