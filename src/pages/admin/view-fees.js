import React, { useEffect, useState } from "react";
import { callApi } from '../../../utils/apicall';


const ViewFees = () => {
    const [userProfile, setUserProfile] = useState([]);
  
    const UserDetails = async () => {
      try {
        let data = await callApi("get", "/allfees");
        setUserProfile(data.data.data);
        console.log("datadata", data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      UserDetails();
    }, []);
  return (
    <div>
      <h2>Hello fees</h2>
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Fee</th>
              <th>Class</th>
            </tr>
          </thead>

          {userProfile &&
            userProfile.map((item, index) => {
              return (
                <>
                  <tbody id={item._id}>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          {/* <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: 45, height: 45 }}
                            className="rounded-circle"
                          /> */}
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{index+1}</p>
                            <p className="text-muted mb-0">{item.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.fees}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.classname}</p>
                      </td>
                      <td>
                        <span className="badge badge-success rounded-pill d-inline"></span>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
        </table>
      </div>
    </div>
  )
}

export default ViewFees
