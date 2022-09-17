import axios from "axios";

export const fetchData = async ({
  url,
  method,
  data,
}) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data,
      'Content-Type': 'application/json',
    }).then(resp => {
      resolve(resp.data);
    }).catch(err => {
      console.error(err);
      reject(err);
    });
  });
};