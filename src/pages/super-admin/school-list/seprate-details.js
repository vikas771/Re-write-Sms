import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { callApi } from "../../../../utils/apicall";

const SeprateDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("user id is here ", id);

  const [schoolDetails, setUserDetails] = useState([]);

  const StudentDetails = async () => {
    try {
      const data = await callApi("get", `/schooldetails/${id}`);
      setUserDetails(data.data.School);
      console.log("user detills are here ", data.data.School);
    } catch (error) {
      console.log(error);
    }
  };

//   console.log("schoolDetails", schoolDetails);

  useEffect(() => {
    StudentDetails();
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">{schoolDetails.name}</h5>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Update-Photo
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Delete-Photo
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">School Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{schoolDetails.schoolname}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{schoolDetails.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{schoolDetails.address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">City</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{schoolDetails.city}</p>
                    </div>
                  </div>
                  <hr />
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeprateDetails;


