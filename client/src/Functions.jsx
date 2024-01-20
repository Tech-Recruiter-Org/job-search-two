export const fetchData = async (count, city, state, jobType) => {
  console.log('-------fetching data-----', city, state, jobType);

  // const requestOptions = {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ city, state, jobType }),
  // };

  fetch('http://localhost:3000/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((jobs) => {
      console.log(jobs);
      const tempJobsArr = [];
      for (let i = 0; i < count; i++) {
        if (
          jobs[i].job_city === city &&
          jobs[i].job_state === state &&
          jobs[i].job_title === jobType
        ) {
          tempJobsArr.push();
        }
      }
      return tempJobsArr;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
