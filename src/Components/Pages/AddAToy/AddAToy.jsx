import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProviders';
import Swal from 'sweetalert2';

const AddAToy = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (newToy) => {
		fetch('https://kidzland-server-nishattasnim00.vercel.app/products', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newToy),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(newToy);
				if (result.insertedId) {
					swal({
						title: 'Welcome!',
						text: 'Item added successfully!',
						icon: 'success',
						buttons: false,
						className: 'text-red-800',
						closeModal: true,
					});
				}
			});
	};

	return (
		<div className="my-container">
			<h1 className="title-3 pb-8">Add A New Toy</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="lg:w-3/5 mx-auto">
				{errors.exampleRequired && <span>This field is required</span>}
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Photo URL</span>
						</label>
						<input
							className="input add-toy"
							{...register('photo')}
							placeholder="Photo URL"
							required
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Name</span>
						</label>
						<input
							className="input add-toy"
							{...register('name')}
							placeholder="Name"
							required
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Seller Name</span>
						</label>
						<input
							className="input add-toy"
							{...register('sellerName')}
							placeholder="Seller Name"
							defaultValue={user ? user.displayName : null}
							required
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Seller Email</span>
						</label>
						<input
							className="input add-toy"
							{...register('sellerEmail')}
							placeholder="Seller Email"
							defaultValue={user ? user.email : null}
							value={user ? user.email : null}
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Sub-Category</span>
						</label>
						<select
							{...register('subCategory')}
							className="input add-toy text-base-2"
							defaultValue=""
							placeholder="Select One"
						>
							<option value="math">Math Toys</option>
							<option value="language">Language Toys</option>
							<option value="science">Science Toys</option>
						</select>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Price</span>
						</label>
						<input
							className="input add-toy"
							{...register('price')}
							placeholder="$"
							required
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Rating</span>
						</label>
						<input
							className="input add-toy"
							{...register('rating')}
							placeholder="Rating"
							required
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Available quantity</span>
						</label>
						<input
							className="input add-toy"
							{...register('availableQuantity')}
							placeholder="Available quantity"
							required
						/>
					</div>
				</div>

				<div className="w-full px-5">
					<label className="label">
						<span className="text-add-toy">Detail description</span>
					</label>
					<textarea
						className="textarea add-toy"
						{...register('description')}
						placeholder="Description"
						maxLength={50}
					></textarea>
				</div>

				<div className="w-full px-5">
					<button
						type="submit"
						className="btn btn-block rounded-none bg-accent border-none text-white"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddAToy;
