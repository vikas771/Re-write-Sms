import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { callApi } from "../../../utils/apicall";
import Router from "next/router";
import { Slide, Rotate } from "react-reveal";

const AllStuent = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [ShowRole, setShowRole] = useState("student");

  const UserDetails = async () => {
    try {
      let data = await callApi("get", `/allteacher?role=${ShowRole}`);
      setUserProfile(data.data.data);
      console.log("data of student list", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    Router.push(`/admin/view-details?id=${id}`)
  };

  const EditDetails = (id) => {
    Router.push(`/admin/update-student?id=${id}`);
  };

  const DeleteDetails = (id) => {
    Router.push(`/common-form/delete-student?id=${id}`);
  };

  useEffect(() => {
    UserDetails();
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-center text-dark pb-2 p-3">
          <Rotate bottom left>
            <h1>Student-List</h1>
          </Rotate>
        </div>
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
                          onClick={() => DeleteDetails(item._id)}
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
    </>
  );
};

export default AllStuent;
