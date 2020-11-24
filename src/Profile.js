import React, { Component } from "react";
import Post from "./Post";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

export default class Profile extends Component {
	state = {
		user: {
			name: "",
		},
		posts: [],
	};

	componentDidMount() {
		fetch(
			`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
		)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					user: result,
				});
			});
		fetch(
			`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}/posts`
		)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					posts: result,
				});
			});
	}

	render() {
		const { user, posts } = this.state;
		const username = user.name.split(" ").join("").toLowerCase();
		return (
			<div className="profile feed">
				<div className="cover-photo"></div>
				<div className="feed-header">
					<h3>
						{user.name}{" "}
						<span className="post-headerSpecial">
							<VerifiedUserIcon className="verified" />
						</span>
						<p className="post-headerSpecial">@{username}</p>
					</h3>
				</div>
				{posts.map((post) => (
					<Post
						key={post.id}
						post={post}
						userId={user.id}
					/>
				))}
			</div>
		);
	}
}
