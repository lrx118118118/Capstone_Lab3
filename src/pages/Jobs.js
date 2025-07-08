import React, { useEffect, useState } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/3a2b3f5e-ffc7-4466-99cd-e6f46c9a305d")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <h1>Job Listings Page</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> – {job.location} {job.sponsorship && "(Sponsorship Available)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
