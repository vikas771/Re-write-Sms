import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import  Router  from "next/router";

const AllTeacher = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [ShowRole, setShowRole] = useState("teacher");

  const UserDetails = async () => {
    try {
      let data = await callApi("get", `/allteacher?role=${ShowRole}`);
      setUserProfile(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    // Router.push(`/super-admin/all-user-list/inner-details?id=${id}`)
    alert(id)
  };

  const EditDetails = (id) =>{
    Router.push(`/admin/update-teacher?id=${id}`)
  }

  const DeleteDetails = (id) =>{
    Router.push(`/admin/delete-teacher?id=${id}`)
  }

  useEffect(() => {
    UserDetails();
  }, []);

  return (
    <>

      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Role</th>
              <th>View-More</th>
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
                     
                      <td > <Button variant="outlined" size="medium" onClick={()=> handleClick(item._id)}>view-more</Button></td>
                      <td > <Button variant="outlined" size="medium" onClick={()=> EditDetails(item._id)}><EditIcon /></Button></td>
                      <td > <Button variant="outlined" size="medium" onClick={()=> DeleteDetails(item._id)}><DeleteIcon /></Button></td>
                    </tr>
                  </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default AllTeacher;
