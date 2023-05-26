import React from 'react';

const Gallery = () => {
	return (
		<div className="bg-purple-100 pb-12 px-3 lg:px-28">
			<h1 className="title-2 pb-20">Gallery</h1>
			<div className="grid grid-flow-row-dense grid-cols-12 gap-4">
				<figure className="h-72 w-full col-span-12 lg:col-span-4 shadow-lg rounded-lg">
					<img
						className="h-72 object-cover border-4 "
						src="https://i.ibb.co/Dz93QYk/counting-bears.jpg"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="1000"
					/>
				</figure>
				<figure className="h-72 w-full  col-span-12 lg:col-span-4 shadow-lg">
					<img
						className="h-72 w-full object-cover border-4"
						src="https://i.ibb.co/ZWPqwCG/alphabet-blocks.webp"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="1500"
					/>
				</figure>
				<figure className="h-72 w-full col-span-12  lg:col-span-4 shadow-lg">
					<img
						className="h-72 w-full object-cover border-4"
						src="https://i.ibb.co/PWDJ1Df/baby-girl.jpg"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
					/>
				</figure>
			</div>

			<div className="grid grid-flow-row-dense grid-cols-12 gap-4 py-3">
				<figure className="h-72 w-full  col-span-12 lg:col-span-3 shadow-lg">
					<img
						className="h-72 w-full object-cover border-4"
						src="https://i.ibb.co/f43cpg9/abacus.webp"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2500"
					/>
				</figure>
				<figure className="h-72 w-full  col-span-12 lg:col-span-6 shadow-lg">
					<img
						className="h-72 w-full object-cover border-4"
						src="https://i.ibb.co/vDCtdgL/word.jpg"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="3000"
					/>
				</figure>
				<figure className="h-72 w-full  col-span-12 lg:col-span-3 shadow-lg">
					<img
						className="h-72 w-full object-cover border-4"
						src="https://i.ibb.co/5cKt7tJ/3-solar.jpg"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="3500"
					/>
				</figure>
			</div>
			<div className="grid grid-flow-row-dense grid-cols-12 gap-4 py-3">
				<figure className="h-72 w-full  col-span-12 lg:col-span-6 shadow-lg">
					<img
						className="h-72 w-full object-cover border-4"
						src="https://i.ibb.co/fHtsFpw/coding-robots.jpg"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="4000"
					/>
				</figure>
				<div className="h-72 w-full  col-span-12 lg:col-span-3 space-y-8 ">
					<figure className="h-32 w-full col-span-3 shadow-lg">
						<img
							className="h-36 w-full object-cover border-4"
							src="https://i.ibb.co/VjKyGvY/solar.jpg"
							alt=""
							data-aos="flip-left"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="4500"
						/>
					</figure>
					<figure className="h-32 w-full  col-span-12 lg:col-span-3 shadow-lg">
						<img
							className="h-32 w-full object-cover border-4"
							src="https://i.ibb.co/L1Bcshf/Writing-poetry.jpg"
							alt=""
							data-aos="flip-left"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="4500"
						/>
					</figure>
				</div>
				<figure className="h-72 w-full  col-span-12 lg:col-span-3 shadow-lg">
					<img
						className="h-72 w-full object-cover border-4"
						src="https://i.ibb.co/pRZvHKn/i-Stock-blog.jpg"
						alt=""
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="4800"
					/>
				</figure>
			</div>
		</div>
	);
};

export default Gallery;
