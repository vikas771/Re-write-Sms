import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { callApi } from "../../../utils/apicall";
import  Router  from "next/router";

const ViewFees = () => {
    const [userProfile, setUserProfile] = useState([]);
  
    const UserDetails = async () => {
      try {
        let data = await callApi("get", "/allfees");
        setUserProfile(data.data.data);
        // console.log("datadata", data.data.data);
      } catch (error) {
        console.log(error);
      }
    };



    const EditDetails = (classId) =>{
      Router.push(`/common-form/update-fees?id=${classId}`)
    }
  
    const DeleteDetails = (id) =>{
      // Router.push(`/common-form/delete-student?id=${id}`)
      alert(id)
    }
  
    useEffect(() => {
      UserDetails();
    }, []);
  return (
    <div>
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>S.No</th>
              <th>Class-Name</th>
              <th>Fee</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {userProfile &&
            userProfile.map((item, index) => {
                console.log("class id ",item.classId)
              return (
                  <tbody key={item._id}>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{index+1}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.classname}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.fees}</p>
                      </td>
                     
                      <td > <Button variant="outlined" size="medium" onClick={()=> EditDetails(item.classId)}><EditIcon /></Button></td>
                      <td > <Button variant="outlined" size="medium" onClick={()=> DeleteDetails(item.classId)}><DeleteIcon /></Button></td>
                    </tr>
                  </tbody>
              );
            })}
        </table>
      </div>
    </div>
  )
}

export default ViewFees
