import React, { Component } from "react";
import Post from "./Post";

export default class PostPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: []
		};
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					post: result,
				});
			});
	}

	render() {
    const { post } = this.state;
    const userId = post.userId
		return (
			<Post post={post} userId={userId}/>
		);
	}
}
