import React, { useState, useEffect } from 'react';
import Job from './Job';

export default function JobDisplay({ jobCards }) {
  const cards = [];
  if (jobCards) {
    for (let i = 0; i < jobCards.length; i++) {
      cards.push(<Job jobCards={jobCards} />);
    }
  }

  return <div className="job-post-container">{cards}</div>;
}
