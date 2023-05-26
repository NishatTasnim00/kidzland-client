import React from 'react';
import quot from '../../../../assets/inverted-commas.png';
const Testimonial = () => {
	return (
		<>
			<div
				className="sm:max-w-xl md:max-w-full lg:max-w-screen lg:min-h-screen bg-no-repeat bg-center bg-cover lg:mx-0 bg-fixed"
				loading="lazy"
				style={{
					backgroundImage:
						"url('https://i.ibb.co/NN0LTHv/fabian-centeno-u-Y60p-JUHq-Oo-unsplash.jpg')",
				}}
			>
				<div className="sm:max-w-xl md:max-w-full lg:w-screen lg:min-h-screen bg-blue-300 bg-cover bg-opacity-80">
					<div className="w-10/12 mx-auto text-white py-14">
						<h1 className="text-3xl text-center">Testimonial</h1>
						<img src="" alt="" />

						<div className="lg:flex gap-10 mx-auto w-full mt-10">
							<div className="lg:w-1/2  flex flex-col items-center space-y-5">
								<p className="lg:h-36">
									This online shop has deeply touched me as a mother. Their
									exceptional range of educational toys and materials promotes
									cognitive and social skills. With outstanding quality and
									attentive customer service, they go beyond selling products,
									providing valuable parenting resources. I wholeheartedly
									recommend this shop for a nurturing and engaging experience
									for children.
								</p>
								<img className="h-10  text-white" src={quot} alt="" />
								<img
									className="h-24 w-24 rounded-full"
									src="https://i.ibb.co/rZ7MYXr/mom.jpg"
									alt=""
								/>
								<p className="text-xl font-medium ">
									Debra Gomez,
									<span className="text-sm font-light pl-2 text-gray-700">
										Mother of 2 toddlers
									</span>
								</p>
							</div>
							<hr className=' my-8 lg:hidden'/>
							<div className="lg:w-1/2 flex flex-col items-center space-y-5">
								<p className="lg:h-36">
									As a psychologist, I am impressed by the positive impact this
									online shop has on children's mental development. The engaging
									materials foster cognitive growth, critical thinking, and
									emotional well-being. It's a valuable resource for supporting
									children's overall mental development.
								</p>
								<img className="h-10  text-white" src={quot} alt="" />
								<img
									className="h-24 w-24 rounded-full"
									src="https://i.ibb.co/1Jg9qPp/meritt-thomas-ao-Q4-DYZLE-E-unsplash.jpg"
									alt=""
								/>
								<p className="text-xl font-medium ">
									Rosalie Chandler,
									<span className="text-sm font-light pl-2 text-gray-700">
										Child Psychologist
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
