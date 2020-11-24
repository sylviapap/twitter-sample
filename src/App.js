import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";
import Post from "./Post";
import PostPage from "./PostPage";
import RightPanel from "./RightPanel";
import Grid from "@material-ui/core/Grid";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			posts: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					users: result,
				});
			});
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					posts: result,
				});
			});
	}
	render() {
		return (
			<div>
				<Grid container>
					<Grid item sm={3}>
						<Sidebar />
					</Grid>
					<Grid item sm={5}>
						<Route exact path="/" component={Feed} />
						<Route
							exact
							path="/profile/:id"
							render={(props) => <Profile {...props} />}
						/>
						<Route
							exact
							path="/post/:id"
							render={(props) => <PostPage {...props} />}
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

export default App;
