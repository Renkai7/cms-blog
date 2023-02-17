import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

// This is a React component that renders the author's information
// The component takes an author object as a prop
// The author object should have the following properties: name, photo, bio
// The component uses the Image component from Next.js to load the author's photo
// The component uses Tailwind CSS classes to style the elements
// The component returns a div element with the following elements inside:
// - A div element that contains the Image component with the author's photo
// - A h3 element that contains the author's name
// - A p element that contains the author's bio
const Author = ({ author }) => (
	<div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
		<div className="absolute left-0 right-0 -top-14">
			<Image
				unoptimized
				loader={grpahCMSImageLoader}
				alt={author.name}
				height="100"
				width="100"
				className="align-middle rounded-full"
				src={author.photo.url}
			/>
		</div>
		<h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
		<p className="text-white text-ls">{author.bio}</p>
	</div>
);

export default Author;
