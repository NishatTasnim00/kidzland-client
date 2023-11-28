import React, { useContext, useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
	const [products, setProducts] = useState([]);
	const [searchText, setSearchText] = useState('');

	// console.log(products);
	useEffect(() => {
		fetch('https://kidzland-server-nishattasnim00.vercel.app/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleSearch = () => {
		fetch(
			`https://kidzland-server-nishattasnim00.vercel.app/getProductByText/${searchText}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			});
	};
	return (
		<div>
			<h1 className="title-3 py-20 capitalize">Have A Look to all the available Toys</h1>
			<div className="flex justify-center">
				<div className="form-control">
					<div className="input-group">
						<input
							onChange={(e) => setSearchText(e.target.value)}
							type="text"
							placeholder="Search…"
							className="input input-bordered"
						/>
						<button
							onClick={handleSearch}
							className="btn bg-neutral hover:bg-error hover:border-error hover:text-amber-900"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className="overflow-x-auto w-10/12 mx-auto py-20">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th className="text-neutral text-center bg-slate-200">
								<label>
									<p>SI No:</p>
								</label>
							</th>
							<th className="text-neutral text-center bg-slate-200 w-36">
								Info. <br></br>
								<span className="font-thin">
									Image, Name, Sub-category, Seller
								</span>
							</th>

							<th className="text-neutral text-center bg-slate-200">
								Price
							</th>
							<th className="text-neutral text-center bg-slate-200"></th>

							<th className="text-neutral text-center bg-slate-200">
								Quantity
							</th>
							<th className="text-neutral text-center bg-slate-200"></th>

							<th className="text-neutral text-center bg-slate-200">
								View Details
							</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, i) => (
							<AllToysRow
								key={product._id}
								product={product}
								i={i}
							></AllToysRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToys;
