 


 import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import Router from 'next/router'
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const EditDetails = (id) =>{
       Router.push(`/common-form/update-exam?id=${id}`);
  }

  const DeleteDetails = (id) =>{
    alert(id)
    // Router.push(`/common-form/delete?id=${id}`)
    Router.push(`/common-form/delete?id=${id}`)
  }
  useEffect(()=>{
    UserDetails()
  },[])

  return (
    <>
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Total-marks</th>
              <th>Time-Duration</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {userProfile &&
            userProfile.map((item, id) => {
              return (
                  <tbody key={item._id}>
                    <tr>
                    <td>
                        <p className="fw-normal mb-1">{id+1}</p>
                      </td>
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
                     
                      <td > <Button variant="outlined" size="medium" onClick={()=> EditDetails(item._id)}><EditIcon /></Button></td>
                      <td > <Button variant="outlined" size="medium" onClick={()=> DeleteDetails(item._id)}><DeleteIcon /></Button></td>
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
