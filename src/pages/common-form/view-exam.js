import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import Router from "next/router";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Slide, Rotate } from "react-reveal";
import Style from "./common.module.css";
import deleteItem from "../../../utils/delete-function";

const ViewExam = () => {
  const [userExam, setUserExam] = useState([]);
  const [deleteStatus, SetdeleteStatus] = useState(false);
  const UserDetails = async () => {
    try {
      let data = await callApi("get", "/allexams");
      setUserExam(data.data.exams);
    } catch (error) {
      console.log(error);
    }
  };

  const EditDetails = (id) => {
    Router.push(`/common-form/update-exam?id=${id}`);
  };


  const DeleteExam = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this school ?"
    );
    if (confirmed) {
      try {
        await deleteItem("/examdelete", id);
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

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="container">
        <div className="text-center text-dark pb-2 p-3">
          <Rotate bottom left>
            <h1>Exam-List</h1>
          </Rotate>
        </div>
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
          <tbody>
            {userExam && userExam.length > 0 ? (
              userExam.map((item, id) => {
                return (
                  <Slide left key={item._id}>
                    <tr>
                      <td>
                        <p className="fw-normal mb-1">{id + 1}</p>
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
                        <p className="fw-normal mb-1">{formatDate(item.date)}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.totalMarks}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.duration} Hours</p>
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
                          onClick={() => DeleteExam(item._id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </td>
                    </tr>
                  </Slide>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  <h2 className={Style.emptyColor}>Exam-List Empty</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewExam;