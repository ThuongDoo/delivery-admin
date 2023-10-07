import React from "react";
import {
  NavLink,
  Outlet,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

function Restaurant() {
  const { id } = useParams();
  const { restaurant } = useRouteLoaderData("root");
  const fileredRestaurant = restaurant.filter((item) => item._id === id);
  return (
    <div className="restaurant">
      <nav className="restaurant-sidebar">
        <h2>{fileredRestaurant[0].name}</h2>
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
