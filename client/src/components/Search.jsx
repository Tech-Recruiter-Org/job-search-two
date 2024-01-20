const Search = ({ getSearch, setJob, city, updateCity }) => {
  return (
    <div>
      <select name="type" id="date-types" onChange={(e) => setJob(e)}>
        <option value="Web Developer">Web Developer</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Mobile iOS">Mobile iOS</option>
      </select>
      <input
        className="search-bar"
        type="text"
        placeholder="Austin, TX"
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
