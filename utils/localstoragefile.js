import React, { useEffect, useState } from "react";

const localDetails = () => {
  // const [LocalSData, setLocalSData] = useState([]);

  // useEffect(() => {


    const localStorageItem = localStorage.getItem("userToken");
    // setLocalSData(JSON.parse(localStorageItem));

    // console.log("LocalSData", LocalSData);

  // }, []);
  return localStorageItem;
};

export default localDetails;
