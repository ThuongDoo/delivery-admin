import api from "./api";

export async function dashboardLoader() {
  const res = await api.get("restaurants");
  const restaurant = res.data.restaurant;
  const resUser = await api.get("users/showMe");
  const user = resUser.data.user;
  return { user, restaurant };
}
