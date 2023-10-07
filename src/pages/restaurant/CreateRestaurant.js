import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import RestaurantForm from "../../components/RestaurantForm";
import api from "../../services/api";
import { useNavigate, useSubmit } from "react-router-dom";

function CreateRestaurant() {
  const navigate = useNavigate();
  const submit = useSubmit();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await api.post("restaurants", values);
      navigate(-1, { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit(values, { method: "post" });
    }
  };
  return (
    <div>
      <RestaurantForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateRestaurant;
