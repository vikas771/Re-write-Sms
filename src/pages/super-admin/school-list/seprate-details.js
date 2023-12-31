import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { callApi } from "../../../../utils/apicall";
import { Slide, Rotate } from "react-reveal";


const SeprateDetails = () => {
  const router = useRouter();
  const { id } = router.query;

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

  useEffect(() => {
    StudentDetails();
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
      <div className="text-center text-dark pb-2 p-3">
          <Rotate bottom left>
            <h1>Welcome to {schoolDetails.schoolname} profile</h1>
            </Rotate>
          </div>
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
                  </div>
                </div>
              </div>
            </div>
            <Slide Left>
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
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{schoolDetails.email}</p>
                    </div>
                  </div> */}
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
                </div>
              </div>
            </div>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeprateDetails;


