 


 import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import Router from 'next/router'
import { Button } from "@mui/material";

const ViewExam = () => {

  const [userProfile, setUserProfile] = useState([]);
  const [ShowRole, setShowRole] = useState("student");


  const handleClick = (id) =>{
  //  alert(id)
   Router.push(`/teacher/all-student-details`)
  }


  const UserDetails = async () => {
    try {
      let data = await callApi("get", "/allexams");
      setUserProfile(data.data.exams);  
    //   Router.push("/teacher/all-studnet-list");
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
              <th>Subject</th>
              <th>Date</th>
              <th>Total-marks</th>
              <th>Time-Duration</th>
            </tr>
          </thead>

          {userProfile &&
            userProfile.map((item, id) => {
              return (
                  <tbody id={item._id}>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                         
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{item.subject}</p>
                            <p className="text-muted mb-0">{item.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.date}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.totalMarks}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.duration} Hours</p>
                      </td>
                      <td>
                        <span className="badge badge-success rounded-pill d-inline"></span>
                      </td>
                      {/* <td><Button variant="outlined" size="medium" onClick={()=> handleClick(item._id)} >view-more</Button></td> */}
                    </tr>
                  </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default ViewExam;
