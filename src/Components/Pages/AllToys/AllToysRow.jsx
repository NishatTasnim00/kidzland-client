import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import Swal from 'sweetalert2';
const AllToysRow = ({ product, i }) => {
	const {user} = useContext(AuthContext)
	// console.log(product);
	const {
		_id,
		photo,
		name,
		subCategory,
		sellerName,
		price,
		availableQuantity,
	} = product;
	// console.log(_id);
	
	return (
		<tr>
			<th className="font-bold text-gray-600 text-center">
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
						<div className="font-bold text-gray-600 text-center">{name}</div>
						<div className="text-sm opacity-50">{subCategory}</div>
						{sellerName && (
							<div className="text-sm opacity-50">posted by : {sellerName}</div>
						)}
					</div>
				</div>
			</td>
			<td className="font-bold text-gray-600 text-center">${price}</td>
			<td></td>
			<td className="font-bold text-gray-600 text-center">
				{availableQuantity}
			</td>
			<td></td>
			<th className="text-center">
				<Link to={`/products/${_id}`} >
					<button className="btn-outlined">
						Details
					</button>
				</Link>
			</th>
		</tr>
	);
};

export default AllToysRow;
