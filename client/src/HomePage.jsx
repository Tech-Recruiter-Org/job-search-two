import React from "react";
import Search from "./components/Search";
import JobDisplay from "./components/JobDisplay";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.user);
  
  return (
    <div className="homepage">
      <h1>Job Search Site </h1>
      <p className="homepage-p">Filter by JOB and LOCATION</p>
      <p className="homepage-p">Welcome, {user.userName}! Here are some jobs in {user.city}.</p>
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
