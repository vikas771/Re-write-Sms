import React, { useEffect, useState } from "react";
import Link from "next/link";
import { callApi } from "../../../../utils/apicall";
import Style from '../sup-comm.module.css'
import { Slide, Rotate } from "react-reveal";

const index = () => {
  
  const [dashboard, setDashboard] = useState([]);
  const [adminDeshboard, setAdminDeshboard] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const adminData = await callApi("get", "/adminpanel");
      setDashboard(adminData.data);
      console.log(adminData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
          <div className="container-fluid d-flex flex-column p-5 mainboxofdata ">
          <div className="text-center text-dark pb-2 p-2 mb-3">
          <Rotate bottom left>
            <h1>Welcome to super-Admin Deshboard</h1>
            </Rotate>
          </div>
            <div className="row">
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2 text-center">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Total Users
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {dashboard.totalUser}
                        </div>
                      </div>
                      <div className={`col-auto ${Style.iconClass}`}>
                        <i className="bi bi-people"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <Link href="/super-admin/school-list">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2 text-center">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Total School
                          </div>

                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {dashboard.totalSchool}
                          </div>
                        </div>
                        <div className={`col-auto ${Style.iconClass}`}>
                          <i className="bi bi-buildings"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2 text-center">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Total Admin
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {dashboard.totalAdmin}
                        </div>
                      </div>
                      <div className={`col-auto ${Style.iconClass}`}>
                        <i className="bi bi-people"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2 text-center">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Total Teacher
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {dashboard.totalTeachers}
                        </div>
                      </div>
                      <div className={`col-auto ${Style.iconClass}`}>
                        <i className="bi bi-person-workspace"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2  text-center">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Total Student
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {dashboard.totalStudents}
                        </div>
                      </div>
                      <div className={`col-auto ${Style.iconClass}`}>
                        <i className="bi bi-person"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default index;