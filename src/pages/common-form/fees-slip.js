import React from 'react'

const FeesSlip = () => {
  return (
    <>
     <div className="card">
  <div className="card-body">
    <div className="container mb-5 mt-3">
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <p style={{ color: "#7e8d9f", fontSize: 20 }}>
          Receipt &gt;&gt; <strong>ID: 123-123</strong>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="text-center">
            <i
              className="far fa-building fa-4x ms-0"
              style={{ color: "#8f8061" }}
            />
            {/* <p className="pt-2">School Name</p> */}
            <p className="pt-2">Gyan peeth H.S school</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <ul className="list-unstyled">
              <li className="text-muted">
              Student Details :- <br/><span style={{ color: "#8f8061" }}>Name :- John Patel</span>
              </li>
              <li className="text-muted">Class :- 5<sup>th</sup></li>
              <li className="text-muted">Address :- Vijay nagar, Indore</li>
              {/* <li className="text-muted">State, Country</li> */}
              <li className="text-muted">
                <i className="fas fa-phone" />Contact :- 999-301-7877
              </li>
            </ul>
          </div>
          <div className="col-xl-4">
            <p className="text-muted">Receipt   </p>
            <ul className="list-unstyled">
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#8f8061" }} />{" "}
                <span className="fw-bold">No : </span>123-456
              </li>
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#8f8061" }} />{" "}
                <span className="fw-bold">Paid Date: </span>Jun 23,2021
              </li>
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#8f8061" }} />{" "}
                <span className="me-1 fw-bold">Status:</span>
                <span className="badge bg-warning text-black fw-bold">
                  Paid
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr />
        <div className="row">
          <div className="col-xl-8">
            {/* <p className="ms-3">Add additional notes and payment information</p> */}
            <div className="row mt-2 mb-5">
        <p className="fw-bold">Date: <span className="text-muted">23 June 2023</span></p>
        <p className="fw-bold mt-3">Signature:</p>
      </div>
          </div>
          <div className="col-xl-3">
            <ul className="list-unstyled">
              <li className="text-muted ms-3">
                <span className="text-black me-4"><p>Previous-Amount &#8377; 15500</p></span>
              </li>
              <li className="text-muted ms-3">
                <span className="text-black me-4"> <p>Total Reaming &#8377; 5000</p></span> 
              </li>
              {/* <li className="text-muted ms-3 mt-2">
                <span className="text-black me-4">Total-Paid</span> <p> &#8377; 10500</p> 
              </li> */}
            </ul>
            <p className="text-black float-start">
              <span className="text-black me-3"> </span>
              <span style={{ fontSize: 25 }}><p>Total-Paid  &#8377; 10500</p> </span>
            </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</div>

    </>
  )
}

export default FeesSlip
