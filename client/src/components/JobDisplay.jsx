import React, { useState, useEffect } from 'react';
import Job from './Job';

export default function JobDisplay({ jobCards }) {
  const cards = [];
  console.log('job cards', jobCards);
  if (jobCards) {
    for (let i = 1; i < jobCards.length; i++) {
      cards.push(<Job jobCards={jobCards} data={jobCards[i]} />);
    }
  }

  return <div className="job-post-container">{cards}</div>;
}
