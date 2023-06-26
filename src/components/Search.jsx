import React from "react";

const Search = ({ search, setInput }) => {
  const handler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input type="text" className="input" onChange={handler} />
      <button onClick={search}>搜尋</button>
    </div>
  );
};

export default Search;
