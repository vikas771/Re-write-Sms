import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import Router from 'next/router'
import { Button } from "@mui/material";

const AllStudnetList = () => {

  const [userProfile, setUserProfile] = useState([]);
  const [ShowRole, setShowRole] = useState("student");


  const handleClick = (id) =>{
   Router.push(`/teacher/all-student-details?id=${id}`)
  }


  const UserDetails = async () => {
    try {
      let data = await callApi("get", `/allstudent`);
      setUserProfile(data.data.data);  
      Router.push("/teacher/all-studnet-list");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    UserDetails()
  },[])

  return (
    <>
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>View-All</th>
            </tr>
          </thead>

          {userProfile &&
            userProfile.map((item) => {
              return (
                  <tbody id={item._id}>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: 45, height: 45 }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{item.name}</p>
                            <p className="text-muted mb-0">{item.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.role}</p>
                      </td>
                      <td>
                        <span className="badge badge-success rounded-pill d-inline"></span>
                      </td>
                      <td><Button variant="outlined" size="medium" onClick={()=> handleClick(item._id)} >view-more</Button></td>
                    </tr>
                  </tbody>
               
              );
            })}
        </table>
      </div>
    </>
  );
};

export default AllStudnetList;
