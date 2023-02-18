import React from "react";
import { useRouter } from "next/router";

import { getPosts, getPostDetails } from "../../services";

import {
	PostDetail,
	Categories,
	PostWidget,
	Author,
	Comments,
	CommentsForm,
	Loader,
} from "../../components";

// This function is a React component that renders the details of a blog post. It takes in a post object as a prop, which includes information such as the post content, author information, categories, and comments. The function uses this information to render the post content, author information, and both a comments form and section. The component also includes widgets related to the post, such as categories and related posts.
const PostDetails = ({ post }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}

	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="col-span-1 lg:col-span-8">
					<PostDetail post={post} />
					<Author author={post.author} />
					<CommentsForm slug={post.slug} />
					<Comments slug={post.slug} />
				</div>
				<div className="col-span-1 lg:col-span-4">
					<div className="relative lg:sticky top-8">
						<PostWidget
							slug={post.slug}
							catergories={post.catergories?.map((category) => category.slug)}
						/>
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDetails;

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);

	return {
		props: { post: data },
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: true,
	};
}
