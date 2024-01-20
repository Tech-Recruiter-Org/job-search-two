export const fetchData = async (count, city, state, jobType) => {
  console.log("-------fetching data-----", city, state, jobType);

  fetch("http://localhost:3000/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((jobs) => {
      console.log(jobs.data);
      console.log(city, state, jobType);
      const tempJobsArr = [];
      for (let i = 0; i < 10; i++) {
        // if (
        //   jobs.data[i].job_city === city &&
        //   jobs.data[i].job_state === state
        //   // &&
        //   // jobs.data[i].job_title == jobType
        // ) {
        tempJobsArr.push(jobs.data[i]);
        // }
      }
      console.log(tempJobsArr);
      return tempJobsArr;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
