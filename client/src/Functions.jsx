export const fetchData = async (count, city, state, jobType) => {
  console.log('-------fetching data-----', city, state, jobType);
  let tempJobsArr = [false];
  let counter = 1;

  fetch('http://localhost:3000/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((jobs) => {
      for (let i = counter - 6; i < counter; i++) {
        if (jobs.data[i] !== undefined) {
          tempJobsArr.push(jobs.data[i]);
        } else {
          tempJobsArr[0] = 'true';
        }
        // }
      }
      console.log(tempJobsArr);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  return tempJobsArr;
};

export default fetchData;
