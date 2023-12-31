import React from "react";
import { Formik, Field, Form } from "formik";
import { useRouteLoaderData } from "react-router-dom";

function RestaurantForm({ data, onSubmit, isCreate }) {
  const initialValues = {
    name: data.name,
    image: data.image,
    description: data.description,
    avarageRating: data.avarageRating,
    numOfReviews: data.numOfReviews,
    foods: data.foods,
    address: data.address,
    user: data.user,
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
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name"></Field>
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <Field type="text" name="image"></Field>
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <Field type="text" name="address"></Field>
              </div>
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
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RestaurantForm;
