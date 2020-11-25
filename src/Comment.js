import React, { Component } from "react";
import { Avatar } from "@material-ui/core";

export default class Comment extends Component {
	render() {
    const {comment} = this.props;
		const username = comment.email.replace(/[^\w]/g, "").toLowerCase();
		const colors = [
			"CornflowerBlue",
			"Brown",
			"BlueViolet",
			"DarkGreen",
			"DarkGrey",
			"Coral",
			"DarkOrange",
		];
		let color = colors[Math.floor(Math.random() * colors.length)];
		return (
			<div className="post">
				<div className="avatar">
					<Avatar style={{ backgroundColor: color }}>
						{comment.email.charAt(0)}
					</Avatar>
				</div>
				<div className="post-body">
					<div className="post-header">
						<div className="post-headerText">
							<h3>
								<span className="post-headerSpecial">
									@{username} &bull;{" "}
									{new Date(
										+new Date() - Math.floor(Math.random() * 10000000000)
									).toLocaleDateString()}
								</span>
							</h3>
						</div>
						<div className="post-headerDescription">{comment.body}</div>
					</div>
					<div className="post-footer">
						<i className="far fa-comment" />
						<i className="fas fa-retweet" />
						<i className="far fa-heart" />
						<i className="fa fa-external-link-alt"></i>
					</div>
				</div>
			</div>
		);
	}
}
