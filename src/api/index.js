import axios from "axios";

const url = "https://desolate-lake-68731.herokuapp.com/productsAPI";
let apiResponse;
let productJsonMap = {};

let flag;

export const fetchAPIData = async () => {
  let tempSession = sessionStorage.getItem("nodeAPIResponse");
  apiResponse = JSON.parse(tempSession);
  flag = "session---------------------------";
  if (!apiResponse) {
    try {
      apiResponse = await axios.get(url);
      sessionStorage.setItem("nodeAPIResponse", JSON.stringify(apiResponse));
      flag = "via api----------------------";
    } catch (error) {
      console.log("error");
    }
  }

  const fetchedapiResponse = apiResponse.data;

  console.log(flag);
  return fetchedapiResponse;
};

export const productIdDetails = async () => {
  const productDetailsArray = await fetchAPIData();
  productDetailsArray.map((currData) => {
    return (productJsonMap[currData.id] = currData);
  });
  return productJsonMap;
};
