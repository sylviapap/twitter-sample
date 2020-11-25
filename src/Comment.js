import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Link } from "react-router-dom";

const Comment = ({ comment, user, avatar }) => {
	// const username = user.name.replace(/[^\w]/g, '').toLowerCase();
  // const userId = user.id
  console.log(comment)
	return (
		<div className="post" key>
			<div className="avatar">
				<Avatar />
			</div>
			<div className="post-body">
				<div className="post-header">
					<div className="post-headerText">
						<h3>
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
};

export default Comment;
