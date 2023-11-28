import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const SingleToy = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://kidzland-server-nishattasnim00.vercel.app/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	// console.log(product);
	const {
		photo,
		name,
		subCategory,
		sellerName,
		sellerEmail,
		price,
		availableQuantity,
		rating,
		description,
	} = product;

	const myStyles = {
		itemShapes: ThinStar,
		activeFillColor: '#F87272',
		inactiveFillColor: '#fdf2f8',
	};

	return (
		<div className="bg-gray-50 w-full p-28 min-h-[calc(100vh-80px)] flex items-center">
			<div className="w-9/12 h-[450px] mx-auto card card-side bg-accent bg-opacity-20 shadow-xl rounded-none relative">
				<div className="absolute top-8 -left-20">
					<figure className="bg-red-500 h-96 w-80 relative">
						<img
							className="h-96 w-80 absolute bg-cover"
							src={photo}
							alt="Movie"
						/>
					</figure>
				</div>
				<div className="absolute w-8/12 top-0 right-0">
					<div className="card-body h-[450px]">
						<div className="items-center pr-10 pt-3">
							<div className="flex gap-2">
								<h2 className="text-3xl font-semibold text-neutral">{name}</h2>
								<p className="text-base-2 pt-3">({subCategory})</p>
							</div>
							<p className="text-base-2">
								<span className="font-thin text-sm">add by: </span> <b></b>
								{sellerName}
							</p>
							<p className="text-base-2">
								<span className="font-thin text-sm">{sellerEmail}</span> <b></b>
							</p>
							<p className="text-xl font-semibold text-red-400 py-2">
								{availableQuantity} Pcs
								<span className="text-base-2"> left only</span>
							</p>
							<p className="text-4xl font-normal text-accent space-x-5 py-5">
								${price}
							</p>
							<p className="text-base-2">
								<span className="text-neutral">Description:</span> {description}
							</p>

							<div />
						</div>
						<div className="card-actions justify-between pt-8">
							<Rating
								className="flex justify-center"
								style={{ maxWidth: 100 }}
								value={Math.round(rating) || 0}
								itemStyles={myStyles}
								readOnly
							>
								{rating}
							</Rating>
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleToy;
