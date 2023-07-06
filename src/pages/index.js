import React from "react";
import Test from "./test";
import Style from "../styles/school.module.css";
const index = () => {
  return (
    <>
      {/* <Test />/ */}

      <div className={Style.MainImg}>
        <img
          src="https://repository-images.githubusercontent.com/320789182/05666c80-6fbe-11eb-8159-9c143259a9aa"
          alt=""
        />
      </div>
    </>
  );
};

export default index;
