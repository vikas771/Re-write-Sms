import React, { useEffect, useState } from "react";
import Style from "./school-list.module.css";
import { callApi } from "../../../../utils/apicall";
import { Button } from "@mui/material";
import  Router  from "next/router";

const index = () => {
  const [schoolData, setSchoolData] = useState([]);


  const AllUsers = async () => {
    try {
      let data = await callApi("get", "/allschool");
      setSchoolData(data.data.SchoolList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    Router.push(`/super-admin/school-list/seprate-details?id=${id}`)
  };


  useEffect(() => {
    AllUsers();
  }, []);


  return (
    <>
      <div className="container p-3 SchoollistPOsition">
        <div className="">
          <div className="text-center text-dark pb-2">
            <h1>School-List</h1>
          </div>
          <div className="">
            <table className="table table-striped">
              <thead data-aos="zoom-in" data-aos-duration="100">
                <tr className="SchoolListTalble">
                  <th scope="col">NO</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Address</th>
                  <th scope="col">Join Year</th>
                  <th>View-more</th>

                </tr>
              </thead>

              {schoolData &&
                schoolData.map((item, id) => {
                  return (
                   
                      <tbody key={item._id}>
                        <tr data-aos="zoom-out-down" data-aos-duration="700">
                          <th scope="row">{id + 1}</th>
                          <td>
                            {" "}
                            <img
                              alt="scl"
                              className={Style.schoolImage}
                             />
                          </td>
                          <td>{item.schoolname}</td>
                          <td>{item.city}</td>
                          <td>{item.address}</td>
                          <td>2022</td>
                          <td > <Button variant="outlined" size="medium" onClick={()=> handleClick(item._id)}>view-more</Button></td>
                        </tr>
                      </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
