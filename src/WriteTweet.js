import React from "react";
import { Avatar, Button } from "@material-ui/core";

function ComposeTweet() {
	return (
		<div className="compose-tweet">
			<form>
				<div className="compose-tweet-input">
					<Avatar src="logo.png" />
					<input placeholder="What's happening?" type="text" />
				</div>
				<Button href="/" type="submit" className="compose-tweet-tweetButton">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default ComposeTweet;
