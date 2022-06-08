import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Users() {
  const [usersData, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get(
        "https://62283fa09fd6174ca81e7895.mockapi.io/Users"
      );
      console.log(users.data);
      setUsers(users.data);
    }
    fetchData();
  }, []);
  const deleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://62283fa09fd6174ca81e7895.mockapi.io/Users/${id}`)
          .then(() => {
            getData();
          });

        swal(" Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  const getData = () => {
    axios
      .get(`https://62283fa09fd6174ca81e7895.mockapi.io/Users/`)
      .then((getData) => {
        setUsers(getData.data);
      });
  };

  return (
    <>
      {" "}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">users</h1>
        <Link
          to={"/Create-users-form"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create user
        </Link>
      </div>
      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">users List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                {usersData.map((users, index) => {
                  return (
                    <tr>
                      <td>{users.name}</td>
                      <td>{users.position}</td>
                      <td>{users.office}</td>
                      <td>{users.age}</td>
                      <td>{users.startdate}</td>
                      <td>{users.salary}</td>
                      <td>
                        <Link
                          to={`/users-view/${users.id}`}
                          className="btn btn-secondary btn-sm"
                        >
                          View
                        </Link>{" "}
                        <Link
                          to={`/users-edit/${users.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          {" "}
                          Edit
                        </Link>{" "}
                        <button
                          onClick={() => deleteUser(users.id)}
                          className="btn btn-danger btn-sm"
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
