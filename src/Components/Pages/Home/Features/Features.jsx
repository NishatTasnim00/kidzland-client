import React from 'react';
import free from '../../../../assets/3d-truck.png'
import money from '../../../../assets/money-back.png';
import premium from '../../../../assets/support.png';
import black from '../../../../assets/black-friday.png';


const Features = () => {
    return (
			<div className="bg-purple-100 py-14">
				<div className="w-10/12 mx-auto grid lg:grid-cols-4 gap-4 space-y-10 place-items-center">
					<div className="flex gap-2">
						<img className="h-14" src={free} alt="" />
						<div>
							<h1 className="text-add-toy">Free Shipping</h1>
							<p className="text-base-2">Free shipping on all UK orders</p>
						</div>
					</div>
					<div className="flex gap-2">
						<img className="h-14" src={money} alt="" />
						<div>
							<h1 className="text-add-toy">Money Guarantee</h1>
							<p className="text-base-2">We are guarantee to your money</p>
						</div>
					</div>
					<div className="flex gap-2">
						<img className="h-14" src={premium} alt="" />
						<div>
							<h1 className="text-add-toy">Premium Support</h1>
							<p className="text-base-2">24 Hour online Support</p>
						</div>
					</div>
					<div className="flex gap-2">
						<img className="h-14" src={black} alt="" />
						<div>
							<h1 className="text-add-toy">Black Friday</h1>
							<p className="text-base-2">Shocking discount on every</p>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Features;