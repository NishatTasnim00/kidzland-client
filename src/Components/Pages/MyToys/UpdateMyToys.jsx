import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateMyToys = ({ product, handleUpdateToy }) => {
	const {
		_id,
		photo,
		name,
		subCategory,
		sellerName,
		sellerEmail,
		price,
		rating,
		availableQuantity,
		description,
	} = product;
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (updatedToy) => {
		console.log(updatedToy);
		handleUpdateToy(updatedToy);
		closeModal(); // Call a function to close the modal
	};

	const closeModal = () => {
		const modal = document.getElementById(`modal-updateToy/${_id}`);
		if (modal) {
			modal.checked = false; // Uncheck the modal checkbox to close it
		}
	};

	return (
		<div className="my-container">
			<h1 className="title-3  ">Update Info.</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
				{errors.exampleRequired && <span>This field is required</span>}
				<div className="grid lg:grid-cols-2">
					<div className="w-full px-5 hidden">
						<label className="label">
							<span className="text-add-toy">ID</span>
						</label>
						<input
							className="input add-toy"
							{...register('_id')}
							placeholder="ID"
							value={_id}
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Price</span>
						</label>
						<input
							className="input add-toy"
							type="number"
							{...register('price')}
							placeholder="$"
							defaultValue={price}
							required
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Available quantity</span>
						</label>
						<input
							className="input add-toy"
							type="number"
							{...register('availableQuantity')}
							placeholder="Available quantity"
							defaultValue={availableQuantity}
							required
						/>
					</div>

					{/* 					
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Photo URL</span>
						</label>
						<input
							className="input add-toy"
							{...register('photo')}
							placeholder="Photo URL"
							defaultValue={photo}
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
							defaultValue={name}
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
							// defaultValue={user ? user.displayName : null}
							defaultValue={sellerName}
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
							// defaultValue={user ? user.email : null}
							value={sellerEmail}
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Sub-Category</span>
						</label>
						<select
							{...register('subCategory')}
							className="input add-toy text-base-2"
							defaultValue="subCategory"
							placeholder="Select One"
						>
							<option disabled selected="">
								Select One
							</option>
							<option value="math">Math Toys</option>
							<option value="language">Language Toys</option>
							<option value="science">Science Toys</option>
						</select>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-toy">Rating</span>
						</label>
						<input
							className="input add-toy"
							{...register('rating')}
							placeholder="Rating"
							defaultValue={rating}
						/>
					</div> */}
				</div>

				<div className="w-full px-5">
					<label className="label">
						<span className="text-add-toy">Detail description</span>
					</label>
					<textarea
						className="textarea add-toy"
						{...register('description')}
						placeholder="Description"
						defaultValue={description}
						maxLength={50}
					></textarea>
				</div>

				<div className="w-full px-5 pt-3">
					<button
						type="submit"
						className="btn btn-block rounded-none bg-accent border-none text-white"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateMyToys;