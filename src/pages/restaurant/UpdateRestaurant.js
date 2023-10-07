import React from "react";
import RestaurantForm from "../../components/RestaurantForm";
import {
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import api from "../../services/api";

function UpdateRestaurant() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { restaurant } = useRouteLoaderData("root");
  const { id } = useParams();
  const fileredRestaurant = restaurant.filter((item) => item._id === id);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      await api.patch(`restaurants/${id}`, values);
      navigate(-1, { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit(values, { method: "patch" });
    }
  };
  return (
    <div>
      <RestaurantForm data={fileredRestaurant[0]} onSubmit={handleSubmit} />
    </div>
  );
}

export default UpdateRestaurant;
