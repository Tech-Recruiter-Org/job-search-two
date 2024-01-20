import React from "react";
import Search from "./components/Search";
import JobDisplay from "./components/JobDisplay";

export default function HomePage({
  getSearch,
  setListings,
  setJob,
  newCity,
  state,
  jobType,
  city,
  updateCity,
  jobCards,
  updateCount,
}) {
  // check if the jobs are already showing. if they are, will show button
  let showSeeMore;
  if (jobCards)
    showSeeMore = (
      <button
        className="see-more-button"
        type="submit"
        onClick={async (e) => await updateCount(e)}
      >
        See more
      </button>
    );

  return (
    <div>
      <h1>Job Search Site </h1>
      <p>Filter by JOB and LOCATION</p>
      <Search
        getSearch={getSearch}
        newCity={newCity}
        setJob={setJob}
        setListings={setListings}
        city={city}
        updateCity={updateCity}
      />
      <JobDisplay jobCards={jobCards} />
      {showSeeMore}
    </div>
  );
}
