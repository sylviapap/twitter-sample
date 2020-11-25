import React from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Post from "./Post";
import PostPage from "./PostPage";
import RightPanel from "./RightPanel";
import Grid from "@material-ui/core/Grid";
import { Route } from "react-router-dom";
import WriteTweet from "./WriteTweet";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			usersLoaded: false,
			postsLoaded: false,
			photosLoaded: false,
			users: [],
			posts: [],
			photos: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						users: result,
						usersLoaded: true,
					});
				},
				(error) => {
					this.setState({
						error,
						usersLoaded: true,
					});
				}
			);
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						posts: result,
						postsLoaded: true,
					});
				},
				(error) => {
					this.setState({
						error,
						postsLoaded: true,
					});
				}
			);
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						photos: result.slice(0, 10),
						photosLoaded: true,
					});
				},
				(error) => {
					this.setState({
						error,
						photosLoaded: true,
					});
				}
			);
	}

	render() {
		const { users, posts, photos } = this.state;
		const { error, usersLoaded, postsLoaded, photosLoaded } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!postsLoaded || !photosLoaded || !usersLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					<Grid container>
						<Grid item sm={3}>
							<Sidebar />
						</Grid>
						<Grid item sm={5}>
							<Route exact path="/">
								<div className="feed">
									<div className="feed-header">
										<h2>Home</h2>
									</div>
									<WriteTweet />
									{posts
										.sort(() => {
											return 0.5 - Math.random();
										})
										.slice(0, 10)
										.map((post) => (
											<Post
												key={post.id}
												post={post}
												user={
													users.filter((user) => user.id === post.userId)[0]
												}
												avatar={
													photos.filter((photo) => photo.id === post.userId)[0]
												}
											/>
										))}
								</div>{" "}
							</Route>
							<Route
								exact
								path="/profile/:id"
								render={(props) => <Profile {...props} />}
							/>
							<Route
								exact
								path="/post/:id"
								render={(props) => (
									<PostPage {...props} users={users} avatars={photos} />
								)}
							/>
						</Grid>
						<Grid item sm={4}>
							<RightPanel />
						</Grid>
					</Grid>
				</div>
			);
		}
	}
}

export default App;
