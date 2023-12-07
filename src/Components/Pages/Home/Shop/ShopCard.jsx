import React from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';


const ShopCard = ({ product }) => {
	const { _id, photo, name, price, rating } = product;

    const myStyles = {
			itemShapes: ThinStar,
			activeFillColor: '#F87272',
			inactiveFillColor: '#fdf2f8',
		};
	return (
		<div className="card  mx-5 lg:w-96 h-[450px]  shadow-xl rounded-none my-5 lg:my-0 bg-slate-100 border-2 border-accent border-opacity-10">
			<figure className="px-5 my-5 h-64 w-full">
				<img src={photo} alt="toys" className="rounded-none h-64 w-full object-cover" />
			</figure>
			<div className="flex flex-col items-center text-center space-y-3">
				<h2 className="text-tag">{name}</h2>
				<p className="text-price">${price}</p>

				<Rating
					style={{ maxWidth: 100 }}
					value={Math.round(rating) || 0}
					itemStyles={myStyles}
					readOnly
				>
					{/* {rating} */}
				</Rating>
				<div className="w-full justify-end">
					<Link
						to={`/products/${_id}`}
						className="btn btn-block rounded-none bg-accent border-none text-white"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ShopCard;
