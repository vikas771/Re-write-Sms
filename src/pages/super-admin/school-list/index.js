import React, { useEffect, useState } from "react";
import Style from "../sup-comm.module.css";
import { callApi } from "../../../../utils/apicall";
import { Button } from "@mui/material";
import Router from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Slide, Rotate } from "react-reveal";
import deleteItem from "../../../../utils/delete-function";

const index = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [deleteStatus, SetdeleteStatus] = useState(false);

  const AllUsers = async () => {
    try {
      let data = await callApi("get", "/allschool");
      setSchoolData(data.data.SchoolList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    Router.push(`/super-admin/school-list/seprate-details?id=${id}`);
  };

  const EditItem = (id) => {
    Router.push(`/super-admin/school-list/edit-school-list?id=${id}`);
  };
  const DeleteUser = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this school ?"
    );
    if (confirmed) {
      try {
        await deleteItem("/deleteschool", id);
        SetdeleteStatus(true)
        console.log("Item deleted");
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    AllUsers();
  }, [deleteStatus]);

  return (
    <>
      <div className="container p-3 SchoollistPOsition">
          <div className="text-center text-dark pb-2 p-3">
          <Rotate bottom left>
            <h1>School-List</h1>
            </Rotate>
          </div>
          <div className="">
            <table className="table table-striped">
              <thead data-aos="zoom-in" data-aos-duration="100">
                <tr className="SchoolListTalble">
                  <th scope="col">S.No</th>
                  <th scope="col">logo</th>
                  <th scope="col">School Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Address</th>
                  <th scope="col">Join Year</th>
                  <th scope="col">View-more</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              {schoolData ?
                schoolData.map((item, id) => {
                  return (
                    <Slide  left key={item._id}>
                    <tbody>
                      <tr data-aos="zoom-out-down" data-aos-duration="700">
                        <th scope="row">{id + 1}</th>
                        <td>
                          {" "}
                          <img alt="scl" className={Style.schoolImage} />
                        </td>
                        <td>{item.schoolname}</td>
                        <td>{item.city}</td>
                        <td>{item.address}</td>
                        <td>2022</td>
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
                            onClick={() => EditItem(item._id)}
                          >
                            {" "}
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
                    </tbody>
                    </Slide>
                  );
                })
                : <div className="text-center text-dark pb-2 p-3">
          <Rotate bottom left>
            <h1>School-List-Empty</h1>
            </Rotate>
          </div>}
            </table>
          </div>
      </div>
    </>
  );
};

export default index;
