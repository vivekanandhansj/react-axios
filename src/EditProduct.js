import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";


function EditProduct() {
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        let Product = await axios.get(
          `https://62283fa09fd6174ca81e7895.mockapi.io/product/${params.id}`
        );
        formik.setValues(Product.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  let formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      category: "",
      offer: 0,

      model: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "plz enter your product name";
      }
      if (!values.price.length >= 4) {
        errors.price = "price is should  minimum 1000";
      }
      if (!values.category) {
        errors.category = "fill category detail";
      }

      if (!values.offer) {
        errors.offer = "plz enter offer details";
      }
      if (!values.model) {
        errors.model = "plz enter model name";
      }

      return errors;
    },

    onSubmit:   async (values) => {
      console.log(values);
      await axios.put(
        `https://62283fa09fd6174ca81e7895.mockapi.io/product/${params.id}`,
        values
      );
      navigate("/Products", { replace: true });
    },
  });

  return (
    <div>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Add Product</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
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
            <div className="col-lg-12">
              <label>Price</label>
              <input
                type={"text"}
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                className="form-control"
                style={{ border: formik.errors.price ? "1px solid red" : " " }}
              />
              <span style={{ color: "red " }}>{formik.errors.price}</span>
            </div>
            <div className="col-lg-12">
              <label>Category</label>
              <input
                type={"text"}
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
                className="form-control"
                style={{
                  border: formik.errors.category ? "1px solid red" : " ",
                }}
              />
              <span style={{ color: "red " }}>{formik.errors.category}</span>
            </div>
            <div className="col-lg-12">
              <label>Offer</label>
              <input
                type={"text"}
                name="offer"
                onChange={formik.handleChange}
                value={formik.values.offer}
                className="form-control"
                style={{ border: formik.errors.offer ? "1px solid red" : " " }}
              />
              <span style={{ color: "red " }}>{formik.errors.offer}</span>
            </div>
            <div className="col-lg-12">
              <label>Model</label>
              <input
                type={"text"}
                name="model"
                onChange={formik.handleChange}
                value={formik.values.model}
                className="form-control"
                style={{ border: formik.errors.model ? "1px solid red" : " " }}
              />
              <span style={{ color: "red " }}>{formik.errors.model}</span>
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
      </div>
    </div>
  );
}

export default EditProduct;
