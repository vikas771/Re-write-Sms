import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { callApi } from "../../../utils/apicall";
import Router from "next/router";
import { Slide, Rotate } from "react-reveal";
import Style from './common.module.css'

const ViewFees = () => {
  const [studentFee, setstudentFee] = useState([]);

  const UserDetails = async () => {
    try {
      let data = await callApi("get", "/allfees");
      setstudentFee(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const EditDetails = (id) => {
    Router.push(`/common-form/update-fees?id=${id}`);
  };

  const DeleteDetails = (id) => {
    Router.push(`/common-form/delete-fees?id=${id}`);
  };

  useEffect(() => {
    UserDetails();
  }, []);
  return (
    <div className="container">
      <div className="text-center text-dark pb-2 p-3">
        <Rotate bottom left>
          <h1>Fee-List</h1>
        </Rotate>
      </div>
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
        <tbody>
          {studentFee && studentFee.length > 0 ? (
            studentFee.map((item, index) => {
              console.log("class id ", item.classId);
              return (
                <Slide left key={item._id}>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{index + 1}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.classname}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.fees}</p>
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
            }) )
            : (<tr>
              <td colSpan="7" className="text-center p-4">
              <h2 className={Style.emptyColor}>Fee-List  Empty</h2>
              </td>
            </tr>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default ViewFees;
