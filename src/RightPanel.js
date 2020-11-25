import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const RightPanel = () => {
  const handleSubmit = () => {document.location.reload()}
  return (
    <div className="right-panel">
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <form onSubmit={handleSubmit}>
        <input 
          id="search" 
          placeholder="Search" 
          type="text" 
          autoComplete="off" 
        />
        </form>
      </div>
      <div className="widget-container">
        <h2>What's happening</h2>
        <img src="https://source.unsplash.com/random"/>
      </div>
    </div>
  );
}

export default RightPanel;
