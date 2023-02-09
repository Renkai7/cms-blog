import React from "react";

const Author = ({ author }) => {
	return (
		<div className="text-center">
			<img
				alt={author.name}
				height="100px"
				width="100px"
				className="align-middle rounded-full"
				src={author.photo.url}
			/>
		</div>
	);
};

export default Author;
