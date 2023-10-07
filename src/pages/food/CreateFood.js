import React from "react";
import FoodForm from "../../components/FoodForm";
import { useNavigate, useParams, useSubmit } from "react-router-dom";
import api from "../../services/api";

function CreateFood() {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const submit = useSubmit();
  const data = {
    name: "",
    image: "",
    description: "",
    price: "",
    restaurant: "",
    discountPercentage: "",
    restaurant: restaurantId,
    category: "650ae9b5f59d7c4e7910e966",
  };
  const handleSubmit = async (values) => {
    try {
      await api.post("foods", values);
      console.log("hahah");
      navigate("../", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      submit(values);
    }
  };
  return (
    <div>
      <FoodForm data={data} onSubmit={handleSubmit} isCreate />
    </div>
  );
}

export default CreateFood;
