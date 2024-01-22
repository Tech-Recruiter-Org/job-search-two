import React from "react";
import { useSelector } from "react-redux";

const Search = ({ getSearch, setJob, city, updateCity }) => {
  return (
    <div className="search-bar">
      <select name="type" id="date-types" onChange={(e) => setJob(e)}>
        <option value="" disabled selected>
          Select Job Type
        </option>
        <option value="Python developer">Python developer</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Mobile iOS">Mobile iOS</option>
      </select>
      <input
        className="search-bar"
        type="text"
        defaultValue={city}
        onChange={(e) => updateCity(e)}
      />
      <button
        className="search-button"
        type="submit"
        onClick={async (e) => await getSearch(e)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
