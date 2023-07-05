import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Slide, Rotate } from "react-reveal";
import { callApi } from "../../../utils/apicall";

const viewDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [userDetails, setUserDetails] = useState([]);

  const StudentDetails = async () => {
    try {
      const data = await callApi("get", `/singleteacher/${id}`);
      setUserDetails(data.data.user);
    console.log("data===",data.data.user)
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
            <h1>Welcome to {userDetails.name} profile</h1>
          </Rotate>
        </div>
        <div className="container py-3">
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
                  <h5 className="my-3">{userDetails.name}</h5>
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
            <Slide Left>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userDetails.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userDetails.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Role</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userDetails.role}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(+91) xxxxxxxxxx</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          Bay Area, San Francisco, CA
                        </p>
                      </div>
                    </div>
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

export default viewDetails;
