import { Field, Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";

function FoodForm({ data, onSubmit, isCreate }) {
  const initialValues = {
    name: data.name,
    image: data.image,
    description: data.description,
    price: data.price,
    restaurant: data.restaurant,
    discountPercentage: data.discountPercentage,
    category: data.category,
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form className="form">
          <div className="form-title">
            <h2>{values.name}</h2>
          </div>
          <div className="form-content">
            <img src={values.image} alt={values.name} />
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name"></Field>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <Field type="text" name="image"></Field>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Field type="text" name="price"></Field>
            </div>
            <div>
              <label htmlFor="discountPercentage">Discount Percentage</label>
              <Field type="text" name="discountPercentage"></Field>
            </div>
            {/* <div>
              <label htmlFor="category">Category</label>
              <Field type="text" name="category"></Field>
            </div> */}
            <div>
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description"></Field>
            </div>
            <div className="form-btnBox">
              <button disabled={isSubmitting} type="submit">
                {isCreate ? "Create" : "Update"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FoodForm;
