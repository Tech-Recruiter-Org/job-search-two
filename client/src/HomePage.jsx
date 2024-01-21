import React from "react";
import Search from "./components/Search";
import JobDisplay from "./components/JobDisplay";
import { useSelector } from "react-redux";

const HomePage = ({
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
}) => {
  const user = useSelector((state) => state.user);

  return (
    <div className="app-bg">
      <div className="homepage app-bg">
        <h1>Welcome to TechRecruiter </h1>
        <p className="homepage-p">Filter by JOB and LOCATION</p>
        <p className="homepage-p">
          Hi, {user.userName}! Here are some jobs in {user.city}.
        </p>
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
    </div>
  );
};

export default HomePage;
