import React, { useContext, useEffect, useState } from 'react';
import UpdateMyToys from './UpdateMyToys';
import { AuthContext } from '../../Provider/AuthProviders';
import del from '../../../assets/delete.png';
import edit from '../../../assets/edit.png';

const MyToysRow = ({ product, i, handleDelete, handleUpdateToy }) => {
	const {
		_id,
		photo,
		name,
		subCategory,
		sellerName,
		sellerEmail,
		price,
		availableQuantity,
		description,
	} = product;

	return (
		<tr>
			<th className="text-gray-500">
				<label>
					<p>{i + 1}</p>
				</label>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="w-40 h-40">
							<img src={photo} />
						</div>
					</div>
					<div>
						<div className="font-bold text-gray-500">{name}</div>
						<div className="text-sm opacity-50">{subCategory}</div>
						<div>
							{sellerName && (
								<div className="text-sm opacity-50">posted by{sellerName}</div>
							)}
						</div>
						<div>
							{sellerEmail && (
								<div className="text-sm opacity-50">{sellerEmail}</div>
							)}
						</div>
					</div>
				</div>
			</td>
			<td className="font-bold text-gray-500 text-center">$ {price}</td>
			<td className="font-bold text-gray-500 text-center">
				{availableQuantity}
			</td>
			<td className="font-bold text-gray-500 text-center">
				<p className="w-40 whitespace-pre-line">{description}</p>
			</td>
			<th className="pl-8">
				<div>
					<label htmlFor={`modal-updateToy/${_id}`}>
						<img className="h-10 w-10 items-center" src={edit} alt="" />
					</label>
				</div>

				{/* Put this part before </body> tag */}
				<input
					type="checkbox"
					id={`modal-updateToy/${_id}`}
					className="modal-toggle"
				/>
				<div className="modal w-full">
					<div className="modal-box min-w-[800px] rounded-none relative">
						<label
							htmlFor={`modal-updateToy/${_id}`}
							className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent border-purple-400 hover:bg-error hover:border-purple-400"
						>
							✕
						</label>
						<UpdateMyToys
							product={product}
							handleUpdateToy={handleUpdateToy}
						></UpdateMyToys>
					</div>
				</div>
			</th>
			<th>
				<img
					src={del}
					onClick={() => handleDelete(_id)}
					className="h-10 w-10"
				/>
			</th>
		</tr>
	);
};

export default MyToysRow;
