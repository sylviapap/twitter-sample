import React, { Component } from "react";
import Post from "./Post";
import Comment from "./Comment";

export default class PostPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
			comments: [],
			user: [],
			avatar: { url: "" },
			postLoaded: false,
			commentsLoaded: false
		};
	}

	componentDidMount() {
		fetch(
			`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
		)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					post: result,
					postLoaded: true,
				});
			});
		fetch(
			`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}/comments`
		)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					comments: result,
					commentsLoaded: true,
				});
			});
	}

	render() {
		const { post, postLoaded, comments, commentsLoaded } = this.state;
		const { users, avatars } = this.props;
		if (!postLoaded || !commentsLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="feed">
					<div className="feed-header">
						<h2>Thread</h2>
					</div>
					<Post
						post={post}
						user={users.filter((user) => user.id === post.userId)[0]}
						avatar={avatars.filter((photo) => photo.id === post.userId)[0]}
					/>
					<div className="feed-header">
					<h4>Comments ({comments.length})</h4>
					</div>
					{comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</div>
			);
		}
	}
}
