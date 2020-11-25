import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Link } from "react-router-dom";

class Post extends Component {
	render() {
		const { post, user, avatar } = this.props;
		const username = user.name.replace(/[^\w]/g, "").toLowerCase();
		const userId = user.id;
		return (
			<div className="post">
				<div className="avatar">
					<Avatar src={avatar.url} />
				</div>
				<div className="post-body">
					<div className="post-header">
						<div className="post-headerText">
							<h3>
								<Link
									to={{
										pathname: `/profile/${userId}`,
									}}
								>
									{user.name}{" "}
								</Link>
								<span className="post-headerSpecial">
									<VerifiedUserIcon className="verified" />
									<Link
										to={{
											pathname: `/profile/${userId}`,
										}}
									>
										{" "}
										@{username}{" "}
									</Link>{" "}
									&bull;{" "}
									<Link
										to={{
											pathname: `/post/${post.id}`,
										}}
									>
										{new Date(
											+new Date() - Math.floor(Math.random() * 10000000000)
										).toLocaleDateString()}
									</Link>
								</span>
							</h3>
						</div>
						<div className="post-headerDescription">{post.body}</div>
					</div>
					<div className="post-footer">
						<Link to={{ pathname: `/post/${post.id}` }}>
							<i className="far fa-comment" />
						</Link>
						<i className="fas fa-retweet" />
						<i className="far fa-heart" />
						<i className="fa fa-external-link-alt"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Post;
