import React from 'react';
import Search from './components/Search';
import JobDisplay from './components/JobDisplay';

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
  showSeeMore,
}) {
  // check if the jobs are already showing. if they are, will show button

  return (
    <div className="homepage">
      <h1>Job Search Site </h1>
      <p className="homepage-p">Filter by JOB and LOCATION</p>
      <div className="search-div">
        <Search
          getSearch={getSearch}
          newCity={newCity}
          setJob={setJob}
          setListings={setListings}
          city={city}
          updateCity={updateCity}
        />
      </div>
      <JobDisplay jobCards={jobCards} />
      {showSeeMore}
    </div>
  );
}
