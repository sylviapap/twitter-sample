import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const RightPanel = () => {
  const handleSubmit = () => {document.location.reload()}
  return (
    <div className="right-panel">
      <div className="search">
        <SearchIcon className="searchIcon" />
        <form onSubmit={handleSubmit}>
        <input 
          id="search" 
          placeholder="Search Twitter" 
          type="text" 
          autoComplete="off" 
        />
        </form>
      </div>

      <div className="widgetContainer">
        <h2>What's happening</h2>
        

      </div>
    </div>
  );
}

export default RightPanel;
