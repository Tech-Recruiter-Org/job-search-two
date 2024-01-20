export const getJobData = async (req, res) => {
  const url =
    "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7cd2420b17msh8fd6743e4bbd572p141a57jsn6e2c876f3416",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

// console.log("hello");
// const getLocationData = (req, res) => {};
