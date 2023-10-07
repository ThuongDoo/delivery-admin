import React from "react";
import {
  NavLink,
  Outlet,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

function Restaurant() {
  const { restaurantId } = useParams();
  const { restaurant } = useRouteLoaderData("root");
  const fileredRestaurant = restaurant.filter(
    (item) => item._id === restaurantId
  );
  return (
    <div className="restaurant">
      <nav className="restaurant-sidebar">
        <div className="restaurant-title">
          <h2>{fileredRestaurant[0].name}</h2>
        </div>
        <div className="restaurant-sidebar-nav">
          <NavLink to="foods">Foods</NavLink>
          <NavLink to="orders">Orders</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Restaurant;
