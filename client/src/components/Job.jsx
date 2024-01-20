import React from 'react';

export default function Job({jobCards}) {

  for (let data of jobCards){
    let employer_name;
    let job_title = data_job_title;
    let job_description;
    let job_city;
    let job_state;
    let job_posted_at_datetime_utc;
  }

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
