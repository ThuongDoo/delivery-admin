import { redirect, useSubmit } from "react-router-dom";
import api from "./api";

export async function restaurantAction({ request }) {
  const restaurant = await request.formData();
  return { restaurant };
}

export async function deleteRestaurantAction({ request }) {
  const formData = await request.formData();
  const id = formData.get("restaurantId");
  console.log(id);
  await api.delete(`restaurants/${id}`);
  return redirect("/");
}
