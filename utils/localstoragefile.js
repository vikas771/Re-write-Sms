import React, { useEffect, useState } from "react";

const localDetails = () => {
  const [LocalSData, setLocalSData] = useState([]);

  useEffect(() => {
    // const localStorageToken = localStorage.getItem("userToken");
    // const localStorageRole = localStorage.getItem("userRole");
    // setLocalSData({ token: localStorageToken, role: localStorageRole });
    // setLocalSData({ token: localStorageToken, role: localStorageRole });
    // console.log("vikas localStorageToken", localStorageToken);
    // console.log("vikas localStorageRole", localStorageRole);


    const localStorageItem = localStorage.getItem("userToken");
    setLocalSData(JSON.parse(localStorageItem));
    // console.log("LocalSData", LocalSData);

  }, []);
  return LocalSData;
};

export default localDetails;
