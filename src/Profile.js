import React, { Component } from "react";
import Post from "./Post";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: { name: "" },
			avatar: {},
			posts: [],
			userLoaded: false,
			postsLoaded: false,
		};
	}

	componentDidMount() {
		fetch(
			`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
		)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					user: result,
					avatar: { url: "https://picsum.photos/200" },
					userLoaded: true,
				});
			});
		fetch(
			`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}/posts`
		)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					posts: result,
					postsLoaded: true,
				});
			});
	}

	render() {
		const { user, avatar, posts, userLoaded, postsLoaded } = this.state;
		const username = user.name.split(" ").join("").toLowerCase();
		if (!postsLoaded || !userLoaded) {
			return <div>Loading...</div>;
		} else {
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
						<Post key={post.id} post={post} user={user} avatar={avatar} />
					))}
				</div>
			);
		}
	}
}
