import React, { useEffect, useState } from "react";
import { callApi } from "../../../../utils/apicall";
import Router from "next/router";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Slide, Rotate } from "react-reveal";
import deleteItem from "../../../../utils/delete-function";

const AllUser = () => {
  const [userData, setUserData] = useState([]);

  const [Role, UserRole] = useState("");
  const [Search, SetSeatch] = useState("");
  const [deleteStatus, SetdeleteStatus] = useState(false);




  const UserDetails = async () => {
    try {
      if (Role && Search) {
        var data = await callApi(
          "get",
          `/alladmin?role=${Role}&name=${Search}`
        );
      } else if (Role) {
        var data = await callApi("get", `/alladmin?role=${Role}`);
      } else if (Search) {
        var data = await callApi("get", `/alladmin?name=${Search}`);
      } else {
        var data = await callApi("get", "/alladmin");
      }

      setUserData(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    Router.push(`/super-admin/all-user-list/inner-details?id=${id}`);
  };

  const EditDetails = (id) => {
    Router.push(`/super-admin/all-user-list/update-all-uer-list?id=${id}`);
  };

  const DeleteUser = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this User ?"
    );
    if (confirmed) {
      try {
        await deleteItem("/deleteadmin", id);
        SetdeleteStatus(true)
        console.log("Item deleted");
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    UserDetails();
  }, [Role, Search,deleteStatus]);

  return (
    <>
      <div className="container mt-3">
        <div className="text-center text-dark pb-2 p-2">
          <Rotate bottom left>
            <h1>User-List</h1>
          </Rotate>
        </div>
        <div className="pagetitle">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <select
                name="role"
                className="dropdown"
                value={Role}
                onChange={(e) => {
                  UserRole(e.target.value);
                }}
                id="role"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
                <option value="superadmin">Super-Admin</option>
                <option value="">All-Role</option>
              </select>
            </li>
            <li className="breadcrumb-item active">
              <input
                type="text"
                placeholder="Search here"
                className="Searchbox"
                value={Search}
                onChange={(e) => SetSeatch(e.target.value)}
              />
            </li>
          </ol>
        </div>
        <table className="table align-middle mb-0 bg-white mt-3">
          <thead className="bg-light">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Role</th>
              <th>View-more</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((item, index) => {
                return (
                  <Slide left key={item._id}>
                    <tr>
                      <td>
                        <p className="fw-normal mb-1">{index + 1}</p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
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
    </>
  );
};

export default AllUser;
