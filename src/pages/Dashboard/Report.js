import React from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
// import "./datatables.scss"

const Report = () => {
  const data = {
    columns: [
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Task",
        field: "Task",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status",
        field: "Status",
        sort: "asc",
        width: 270,
      },
      // {
      //   label: "Office",
      //   field: "office",
      //   sort: "asc",
      //   width: 200,
      // },
      // {
      //   label: "Age",
      //   field: "age",
      //   sort: "asc",
      //   width: 100,
      // },
    
      // {
      //   label: "Salary",
      //   field: "salary",
      //   sort: "asc",
      //   width: 100,
      // },
    ],
    rows: [
      {date: "2011/04/25",
        Task: "Tiger Nixon",
        Status: "Done",
       
      },
      {date: "2011/04/27",
        Task: "Nixon",
        Status: "Pending",
       
      },
      {date: "2011/04/28",
        Task: "Tiger",
        Status: "Done",
       
      },
      {date: "2011/04/25",
        Task: "Tiger Nixon",
        Status: "Done",
       
      },
      // {
      //   name: "Garrett Winters",
      //   position: "Accountant",
      //   office: "Tokyo",
      //   age: "63",
      //   date: "2011/07/25",
      //   salary: "$170",
      // },
      // {
      //   name: "Ashton Cox",
      //   position: "Junior Technical Author",
      //   office: "San Francisco",
      //   age: "66",
      //   date: "2009/01/12",
      //   salary: "$86",
      // },
      // {
      //   name: "Cedric Kelly",
      //   position: "Senior Javascript Developer",
      //   office: "Edinburgh",
      //   age: "22",
      //   date: "2012/03/29",
      //   salary: "$433",
      // },
      
    ],
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Daily Report</title>
        </MetaTags>
        <div className="container-fluid">
          {/* <Breadcrumbs maintitle="Veltrix" title="Tables" breadcrumbItem="Data Tables" /> */}
      <h3 class="text-center justify-content-center"> Daily Report</h3>
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                 

                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Stripped example </CardTitle>
                  <p className="card-title-desc">
                    mdbreact DataTables has most features enabled by default, so
                    all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                    <code>&lt;MDBDataTable striped /&gt;</code>.
                  </p>

                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Report

