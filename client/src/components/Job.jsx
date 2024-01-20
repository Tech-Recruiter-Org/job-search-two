import React from "react";
import { Grid } from "@mui/material";

export default function Job({ jobCards, data }) {
  const {
    employer_name,
    job_title,
    job_description,
    job_city,
    job_state,
    job_posted_at_datetime_utc,
  } = data;

  return (
    <div className="job-container">
      <div className="job-card">
        <p className="job-title">
          <strong>{job_title}</strong>
        </p>
        <ul className="jobDetailsList">
          <li className="jobDetail">Employer: {employer_name}</li>
          <li className="jobDetail">Location: {`${job_city}, ${job_state}`}</li>
          <li className="jobDetail">Posted At: {job_posted_at_datetime_utc}</li>
          <li className="jobDetail">Description: {job_description}</li>
        </ul>
      </div>
    </div>
  );
}
