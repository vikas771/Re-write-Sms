import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import { Slide, Rotate } from "react-reveal";

const StudentFee = () => {
  const [studentFee, setstudentFee] = useState([]);

  const UserDetails = async () => {
    try {
      let data = await callApi("get", "/myfees");
      setstudentFee(data.data.allData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("studnet fee ==== >> ", studentFee);

  useEffect(() => {
    UserDetails();
  }, []);
  return (
    <div>
      <div className="container">
      <div className="text-center text-dark pb-2 p-3">
          <Rotate bottom left>
            <h1>Fee-Details</h1>
          </Rotate>
        </div>
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Total Fee</th>
              <th>install-First</th>
              <th>install-Second</th>
              <th>install-Third</th>
              <th>Due-Fees</th>
            </tr>
          </thead>

          <tbody>
            <Slide left>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{studentFee.TotalFees}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{studentFee.install1}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{studentFee.install2}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{studentFee.install3}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{studentFee.remainingFees}</p>
              </td>
            </tr>
              </Slide>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentFee;
