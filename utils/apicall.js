import axios from "axios";
import nextConfig from "../next.config";

export const callApi = (req, url, body) => {
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem("Token");
    // let newToken  = JSON.parse(token)
    let headers;
    if (token == null) {
      headers = {};
    } else {
      headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    var config = {
      method: req,
      url: `${nextConfig.ApiUrl}` + url,
      headers: headers,
      data: body,
    };
    axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
