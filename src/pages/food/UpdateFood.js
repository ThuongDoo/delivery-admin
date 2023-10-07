import React from "react";
import {
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import FoodForm from "../../components/FoodForm";
import api from "../../services/api";

function UpdateFood() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { food } = useRouteLoaderData("restaurant");
  const { foodId } = useParams();
  const filterFood = food.filter((item) => item._id === foodId);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      await api.patch(`foods/${foodId}`, values);
      navigate("../", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit(values);
    }
  };
  return (
    <div>
      <FoodForm data={filterFood[0]} onSubmit={handleSubmit} />
    </div>
  );
}

export default UpdateFood;
