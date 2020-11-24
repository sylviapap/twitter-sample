import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";

class Feed extends React.Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					posts: result,
				});
			});
	}

	render() {
    const { posts } = this.state;

		return (
			<div className="feed">
				<div className="feed-header">
					<h2>Home</h2>
				</div>
				<TweetBox />

				{posts.sort(function(a, b){return 0.5 - Math.random()}).slice(0,10).map((post) => (
					<Post key={post.id} post={post} userId={post.userId} />
				))}
			</div>
		);
	}
}

export default Feed;
