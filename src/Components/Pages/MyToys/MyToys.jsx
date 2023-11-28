import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProviders';
import MyToysRow from './MyToysRow';

const MyToys = () => {
	const [control, setControl] = useState(true);
	const [sort, setSort] = useState('asc'); // Default sorting order is ascending
	const { user, setLoading, loading } = useContext(AuthContext);

	let url = `https://kidzland-server-nishattasnim00.vercel.app/products?sellerEmail=${user.email}&sort=${sort}`;

	// let url = `https://kidzland-server-nishattasnim00.vercel.app/products?sellerEmail=${user.email}`;

	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setProducts(data);
				setLoading(false);
			});
	}, [user, control, loading, sort]);

	const handleSort = () => {
		setSort(sort === 'asc' ? 'desc' : 'asc');
	};

	const handleUpdateToy = (updatedToy) => {
		fetch(
			`https://kidzland-server-nishattasnim00.vercel.app/updateToy/${updatedToy._id}`,
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(updatedToy),
			}
		)
			.then((res) => res.json())
			.then((result) => {
				if (result.modifiedCount > 0) {
					setControl(!control);
					setLoading(false);
					swal('Updated Successfully');
				}
			});
	};

	const handleDelete = (_id) => {
		// console.log(_id);
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: 'accent',
			cancelButtonColor: '#ec4899',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://kidzland-server-nishattasnim00.vercel.app/products/${_id}`,
					{
						method: 'DELETE',
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.DeleteCount > 0) {
							Swal.fire('Deleted!', 'Your toy has been smashed.', 'success');
						}
						const remaining = products.filter((booking) => booking._id !== _id);
						setProducts(remaining);
					});
			}
		});
	};
	return (
		<div className='min-h-[calc(100vh-80px)]'>
			<h1 className="title-3 py-20">
				{user.displayName
					? `Uploaded By ${user.displayName}`
					: 'My Toys Collection'}
			</h1>
			<div className="w-10/12 mx-auto pb-5 flex justify-end text-neutral ">
				<p className="bg-neutral bg-opacity-30 border-3 rounded-sm p-3 font-semibold text-xl ">
					Price{' '}
					<button className="focus:outline-none" onClick={handleSort}>
						{sort === 'asc' ? '▲' : '▼'}
					</button>
				</p>
			</div>
			<div className="overflow-x-auto w-full pb-20">
				<table className="table w-10/12 mx-auto">
					{/* head */}
					<thead>
						<tr className="w-full">
							<th className="text-neutral text-center bg-slate-200">
								<label>
									<p>SI No:</p>
								</label>
							</th>
							<th className="text-neutral text-center bg-slate-200">
								Info. <br></br>
								<span className="font-thin">
									Image, Name, Sub-category, Seller
								</span>
							</th>
							<th className="text-neutral text-center bg-slate-200">
								Price
							</th>
							<th className="text-neutral text-center bg-slate-200">
								Quantity
							</th>
							<th className="text-neutral text-center bg-slate-200 w-/312">
								Details
							</th>
							<th className="text-neutral text-center bg-slate-200">Edit</th>
							<th className="text-neutral text-center bg-slate-200  ">
								Delete
							</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, i) => (
							<MyToysRow
								key={product._id}
								product={product}
								i={i}
								handleDelete={handleDelete}
								handleUpdateToy={handleUpdateToy}
							></MyToysRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyToys;
