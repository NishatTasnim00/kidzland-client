import React from 'react';
const BlogCard = (props) => {
	const { id, ques, ans } = props.qCard;
	// console.log(props.qCard);
	return (
		<div>
			<div className="p-5 mb-4 bg-purple-50 rounded-none shadow-lg shadow-purple-100">
				<div className='border p-5'>
					<h1 className="mb-5 font-bold text-accent">
						{id} .{ques}
					</h1>
					<p className="mb-3 text-gray-400">
						<span className="font-bold text-error">Ans : </span>
						{ans}
					</p>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
