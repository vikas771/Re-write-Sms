// import React, { useEffect, useState } from "react";
// import { callApi } from "../../../../utils/apicall";

// const ViewAall = () => {

//   const [userProfile, setUserProfile] = useState([]);
//   // console.log({role})

//   const UserDetails = async () => {
//     try {
//       let data = await callApi("get", `/allteacher?role=${role}`);
//       setUserProfile(data.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(()=>{
//     UserDetails()
//   },[])

//   return (
//     <>
//       <h2>Here is all view</h2>
//       <div className="container">
//         <table className="table align-middle mb-0 bg-white">
//           <thead className="bg-light">
//             <tr>
//               <th>Name</th>
//               <th>Role</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           {userProfile &&
//             userProfile.map((item, id) => {
//               return (
//                 <>
//                   <tbody>
//                     <tr>
//                       <td>
//                         <div className="d-flex align-items-center">
//                           <img
//                             src="https://mdbootstrap.com/img/new/avatars/8.jpg"
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
//                 </>
//               );
//             })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default ViewAall;
