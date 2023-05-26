import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [activeTab, setActiveTab] = useState('subCategory');

	// console.log(products);
	// useEffect(() => {
	// 	fetch('https://kidzland-server-nishattasnim00.vercel.app/products')
	// 		.then((res) => res.json())
	// 		.then((data) => setProducts(data));
	// }, []);

	useEffect(() => {
		fetch(
			`https://kidzland-server-nishattasnim00.vercel.app/getProductsBySubCategory/${activeTab}`
		)
			.then((res) => res.json())
			.then((result) => {
				setProducts(result);
			});
	}, [activeTab]);

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};
	return (
		<>
			<div>
				<p className="title-2 pt-12">Shop</p>
				<p className="text-center font-semibold text-gray-500 pt-5">
					Have a look according to category
				</p>

				<div className="tabs flex justify-center align-middle py-16">
					<div
						onClick={() => handleTabClick('Math Toys')}
						className={`tab tab-1 bg-accent ${
							activeTab == 'Math Toys' ? ' bg-error text-white' : ''
						}`}
					>
						Math Toys
					</div>
					<div
						onClick={() => handleTabClick('Science Toys')}
						className={`tab tab-1 bg-accent ${
							activeTab == 'Science Toys' ? ' bg-error text-white' : ''
						}`}
					>
						Science Toys
					</div>
					<div
						onClick={() => handleTabClick('Language Toys')}
						className={`tab tab-1 bg-accent ${
							activeTab == 'Language Toys' ? ' bg-error text-white' : ''
						}`}
					>
						Language Toys
					</div>
				</div>
			</div>
			<div className="container">
				{products.map((product) => (
					<ShopCard key={product._id} product={product}></ShopCard>
				))}
			</div>
		</>
	);
};

export default Shop;
