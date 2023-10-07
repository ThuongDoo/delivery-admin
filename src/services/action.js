import { redirect, useSubmit } from "react-router-dom";
import api from "./api";

export async function restaurantAction({ request }) {
  const restaurant = await request.formData();
  return { restaurant };
}

export async function deleteRestaurantAction({ request }) {
  const formData = await request.formData();
  const id = formData.get("restaurantId");
  await api.delete(`restaurants/${id}`);
  return redirect("/");
}

export async function foodAction({ request }) {
  console.log("request");
  console.log(request);
  const food = await request.formData();
  return { food };
}

export async function userAction({ request }) {
  const user = await request.formData();
  const role = user.get("role");
  console.log(role);
  console.log("action");
  return { user };
}
