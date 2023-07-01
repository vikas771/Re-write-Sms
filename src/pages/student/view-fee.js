// import React, { useEffect, useState } from "react";
// import Router from 'next/router'
// import { callApi } from "../../../utils/apicall";

// const ViewFee = () => {

//   const [studentFee, setStudentFee] = useState([]);

  

 

//   const UserDetails = async () => {
//     try {
//       let data = await callApi("get", "/myfees");
//       setStudentFee(data.data.allData);  
//     //   Router.push("/teacher/all-studnet-list");
//     console.log("fkldj===>>>",data.data.allData );
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(()=>{
//     UserDetails()
//   },[])

//   console.log("studentFee ==>", studentFee);
//   return (
//     <>
//       <div className="container">
//         <table className="table align-middle mb-0 bg-white">
//           <thead className="bg-light">
//             <tr>
//               <th>s.no</th>
//               <th>Total-Fee</th>
//               <th>Intallment</th>
//               <th>paid</th>
//               <th>Reaming</th>
//             </tr>
//           </thead>

//           {studentFee &&
//             studentFee.map((item, index) => {
//               return (
                
//                   <tbody key={item._id}>
//                     <tr>
//                       <td>
//                         <div className="d-flex align-items-center">
                        
//                           <img
//                             src="https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
//                             alt=""
//                             style={{ width: 45, height: 45 }}
//                             className="rounded-circle"
//                           />
//                           <div className="ms-3">
//                             <p className="fw-bold mb-1">{item.name}</p>
//                             <p className="text-muted mb-0">{item.email}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <p className="fw-normal mb-1">{item.role}</p>
//                       </td>
//                       <td>
//                         <span className="badge badge-success rounded-pill d-inline"></span>
//                       </td>
//                     </tr>
//                   </tbody>
                
//               );
//             })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default ViewFee;


import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";

const ViewFee = () => {
  const [schoolData, setSchoolData] = useState([]);


  const AllUsers = async () => {
    try {
      let data = await callApi("get", "/myfees");
      setSchoolData(data.data.allData);
      console.log("data.data.allData",data.data.allData);
    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    AllUsers();
  }, []);


  console.log("school data===>",schoolData);

  return (
    <>
      <div className="container p-3 SchoollistPOsition">
        <div className="">
          <div className="text-center text-dark pb-2">
            <h1>School-List</h1>
          </div>
          <div className="">
            <table className="table table-striped">
              <thead data-aos="zoom-in" data-aos-duration="100">
                <tr className="SchoolListTalble">
                  <th scope="col">NO</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Address</th>
                  <th scope="col">Join Year</th>
                  <th>View-more</th>

                </tr>
              </thead>

              {schoolData &&
                schoolData.map((item, id) => {
                  return (
                   
                      <tbody key={item._id}>
                        <tr data-aos="zoom-out-down" data-aos-duration="700">
                          <th scope="row">{id + 1}</th>
                          <td>
                            {" "}
                            {/* <img
                              alt="scl"
                              className={Style.schoolImage}
                             /> */}
                          </td>
                          <td>{item.schoolname}</td>
                          <td>{item.city}</td>
                          <td>{item.address}</td>
                          <td>2022</td>
                        </tr>
                      </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewFee;

