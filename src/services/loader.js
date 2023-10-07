import api from "./api";

export async function restaurantLoader() {
  const res = await api.get("restaurants");
  const restaurant = res.data.restaurant;
  const resUser = await api.get("users/showMe");
  const user = resUser.data.user;
  localStorage.setItem("userRole", user.role);
  return { user, restaurant };
}

export async function foodLoader({ params }) {
  console.log("loader");
  const { restaurantId } = params;
  console.log(restaurantId);
  const res = await api.get(`restaurants/${restaurantId}`);
  const food = res.data.restaurant.foods;
  return { food };
}
