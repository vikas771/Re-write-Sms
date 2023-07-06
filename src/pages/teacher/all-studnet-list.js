import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import Router from "next/router";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Slide, Rotate } from "react-reveal";
import deleteItem from "../../../utils/delete-function";

const AllStudnetList = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [deleteStatus, SetdeleteStatus] = useState(false);

  const UserDetails = async () => {
    try {
      let data = await callApi("get", `/allstudent`);
      setUserProfile(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    Router.push(`/teacher/all-student-details?id=${id}`);
  };

  const EditDetails = (id) => {
    Router.push(`/common-form/edit-student?id=${id}`);
  };

  const DeleteUser = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this User ?"
    );
    if (confirmed) {
      try {
        await deleteItem("/deletestudent", id);
        SetdeleteStatus(true)
        console.log("Item deleted");
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    UserDetails();
  }, [deleteStatus]);

  return (
    <div className="container">
      <div className="text-center text-dark pb-2 p-4">
        <Rotate bottom left>
          <h1>All-List</h1>
        </Rotate>
      </div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Role</th>
            <th>View-All</th>
            <th>Edit</th>
            <th>Delete-All</th>
          </tr>
        </thead>
        <tbody>
          {userProfile &&
            userProfile.map((item, id) => {
              return (
                <Slide left key={item._id}>
                  <tr>
                    <td>
                      <p className="fw-normal mb-1">{id + 1}</p>
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

                    <td>
                      {" "}
                      <Button
                        variant="outlined"
                        size="medium"
                        onClick={() => handleClick(item._id)}
                      >
                        view-more
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Button
                        variant="outlined"
                        size="medium"
                        onClick={() => EditDetails(item._id)}
                      >
                        <EditIcon />
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Button
                        variant="outlined"
                        size="medium"
                        onClick={() => DeleteUser(item._id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </td>
                  </tr>
                </Slide>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudnetList;