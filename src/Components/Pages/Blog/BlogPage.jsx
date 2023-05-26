import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogPage = () => {
	const [blogData, setBlogData] = useState([]);
	console.log(blogData);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://kidzland-server-nishattasnim00.vercel.app/blogs'
			);
			const data = await response.json();
			setBlogData(data);
		};
		fetchData();
	}, []);

	return (
		<div className="my-container">
			<h1 className="title-2 lg:pb-16">Blog</h1>
			{blogData &&
				blogData.map((qCard) => (
					<BlogCard qCard={qCard} key={qCard.id}></BlogCard>
				))}
		</div>
	);
};

export default BlogPage;
