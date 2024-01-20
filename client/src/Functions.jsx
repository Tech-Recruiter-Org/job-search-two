let tempJobsArr = [false];
let counter = 1;

export const fetchData = async(city, state, jobType, isDone) => {
  counter+=6
  await fetch("http://localhost:3000/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((jobs) => {
      for (let i = counter-6; i < counter; i++) {
          if (jobs.data[i] !== undefined){
            tempJobsArr.push(jobs.data[i]);
          } else {
            tempJobsArr[0] = 'true'
          }
        // }
      }
      console.log(tempJobsArr);      
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    return tempJobsArr
};
export const getUserInfo = async() =>{
  console.log('in get user info')
  let result;
  const userObj = {
    userName: "test8"
  }
  await fetch("http://localhost:3000/userData", {
    method: 'POST',
    headers:{
      "content-type":"application/json"
    } ,
    body: JSON.stringify(userObj)
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    let result = data
        console.log(data)
  })
  .catch((error) => {
    console.error("Error retrieving user data:", error);
  });
  return data
}

// export default fetchData
