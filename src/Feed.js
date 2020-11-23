import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";

class Feed extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        }
      )
  }

  render() {
    const { items } = this.state;
      return (
        <div className="feed">
          <div className="feed-header">
            <h2>Home</h2>
          </div>
    
          <TweetBox />
    
            {items.map((item) => (
              <Post
                key={items.indexOf(item)}
                displayName={item.userId}
                text={item.body}
              />
            ))}
        </div>
        )
    }
  }

export default Feed