import React from "react";

export default function Job({ jobCards, data }) {
  const {
    employer_name,
    job_title,
    job_description,
    job_city,
    job_state,
    job_posted_at_datetime_utc,
  } = data;

  console.log("in job", data);

  return (
    <div className="job-card">
      <p className="job-title">{job_title}</p>
      <ul className="jobDetailsList">
        <li className="jobDetail">Employer: {employer_name}</li>
        <li className="jobDetail">Description: {job_description}</li>
        <li className="jobDetail">Location: {`${job_city}, ${job_state}`}</li>
        <li className="jobDetail">Posted At: {job_posted_at_datetime_utc}</li>
      </ul>
    </div>
  );
}
