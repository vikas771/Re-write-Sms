import React, { useEffect, useState } from "react";
import { callApi } from "../../../../utils/apicall";
import Router  from "next/router";
import { Button } from "@mui/material";


const AllUser = () => {
  const [userProfile, setUserProfile] = useState([]);

  const [Role, UserRole] = useState("");
  const [Search, SetSeatch] = useState("");

  const UserDetails = async () => {
    try {

      if (Role && Search) {
       
        var data = await callApi("get", `/alladmin?role=${Role}&name=${Search}`);

      } else if (Role) {

        var data = await callApi("get", `/alladmin?role=${Role}`);

        // console.log("first", data);


      } else if (Search) {

        var data = await callApi("get", `/alladmin?name=${Search}`);
        // console.log("second", data);

      } else {
        var data = await callApi("get", "/alladmin");
        // console.log("third", data);

      }



      
      // console.log("User details are ", data.data.data);
      setUserProfile(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    Router.push(`/super-admin/all-user-list/inner-details?id=${id}`)
  };

  useEffect(() => {
    UserDetails();
  },  [Role, Search]);

  
  return (
    <>
      <div className="container mt-3">
       

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
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>View-more</th>
            </tr>
          </thead>

          {userProfile &&
            userProfile.map((item, index) => {
              return (
                
                  <tbody key={item._id}>
                    <tr>
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
                        <span className="badge badge-success rounded-pill d-inline"></span>
                      </td>
                      <td > <Button variant="outlined" size="medium" onClick={()=> handleClick(item._id)}>view-more</Button></td>
                    </tr>
                  </tbody>
                
              );
            })}
        </table>
      </div>
    </>
  );
};

export default AllUser;
