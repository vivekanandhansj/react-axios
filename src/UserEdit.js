import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

function UserEdit() {
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          `https://62283fa09fd6174ca81e7895.mockapi.io/Users/${params.id}`
        );
        formik.setValues(user.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      startdate: "",
      salary: 0,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "plz enter your name";
      }
      if (!values.position) {
        errors.position = "plz enter your position";
      }
      if (!values.office) {
        errors.office = "plz enter your office";
      }
      if (!values.age || values.age < 18) {
        errors.age = "Age is required and should be greater than 18";
      }
      if (!values.startdate) {
        errors.startdate = "plz enter your startdate";
      }
      if (!values.salary) {
        errors.salary = "plz enter your salary";
      }

      return errors;
    },

    onSubmit: async (values) => {
      console.log(values);
      await axios.put(
        `https://62283fa09fd6174ca81e7895.mockapi.io/students/${params.id}`,
        values
      );
      navigate("/Users", { replace: true });
    }
  });

  return (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">User Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type={"text"}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="form-control"
                style={{ border: formik.errors.name ? "1px solid red" : " " }}
              />
              <span style={{ color: "red " }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type={"text"}
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
                className="form-control"
                style={{
                  border: formik.errors.position ? "1px solid red" : " ",
                }}
              />
              <span style={{ color: "red " }}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type={"text"}
                name="office"
                onChange={formik.handleChange}
                value={formik.values.office}
                className="form-control"
                style={{ border: formik.errors.office ? "1px solid red" : " " }}
              />
              <span style={{ color: "red " }}>{formik.errors.office}</span>
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type={"number"}
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
                className="form-control"
                style={{ border: formik.errors.age ? "1px solid red" : " " }}
              />
              <span style={{ color: "red " }}>{formik.errors.age}</span>
            </div>
            <div className="col-lg-6">
              <label>Start date</label>
              <input
                type={"date"}
                name="startdate"
                onChange={formik.handleChange}
                value={formik.values.startdate}
                className="form-control"
                style={{
                  border: formik.errors.startdate ? "1px solid red" : " ",
                }}
              />
              <span style={{ color: "red " }}>{formik.errors.startdate}</span>
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type={"number"}
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
                className="form-control"
                style={{ border: formik.errors.salary ? "1px solid red" : " " }}
              />
              <span style={{ color: "red " }}>{formik.errors.salary}</span>
            </div>
            <div className="col-lg-6 mt-3">
              <input
                disabled={Object.keys(formik.errors).length !== 0}
                type={"submit"}
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
        {/* <pre>{JSON.stringify(formik.errors)}</pre> */}
      </div>
    </>
  );
}

export default UserEdit;
