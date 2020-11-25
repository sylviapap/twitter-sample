import React from "react";
import { Avatar, Button } from "@material-ui/core";

function WriteTweet() {
	return (
		<div className="write-tweet">
			<form>
				<div className="write-tweet-input">
					<Avatar src="logo.png" />
					<input placeholder="What's happening?" type="text" />
				</div>
				<Button href="/" type="submit" className="write-tweet-tweetButton">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default WriteTweet;
