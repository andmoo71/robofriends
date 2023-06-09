import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--blue bg-lightest-blue"
        onChange={searchChange} 
      />
    </div>
  );
};

export default Searchbox;
