import React, { useEffect, useState } from "react";
import api from "../services/api";
import {
  Outlet,
  useNavigate,
  useRouteLoaderData,
  useSubmit,
  Form,
} from "react-router-dom";

function Dashboard() {
  const { restaurant } = useRouteLoaderData("root");
  console.log(restaurant);
  const navigate = useNavigate();
  return (
    <div>
      {restaurant ? (
        restaurant.length === 0 ? (
          <div className="dashboard">
            <h1>You don't have any restaurant</h1>
            <button type="button" onClick={() => navigate("create")}>
              CREATE
            </button>
          </div>
        ) : (
          <div className="dashboard">
            <div>
              <div className="list">
                {restaurant.map((item, index) => (
                  <div className="list-item" key={index}>
                    <div>
                      <img src={item.image} alt={item.name} />
                      <h2>{item.name}</h2>
                    </div>
                    <div className="btnBox">
                      <button
                        onClick={() => {
                          navigate(`/update-restaurant/${item._id}`);
                        }}
                      >
                        Update
                      </button>
                      <Form method="delete">
                        <input name="restaurantId" value={item._id} hidden />
                        <button type="submit">Delete</button>
                      </Form>
                      <button
                        onClick={() => {
                          navigate(`restaurant/${item._id}`);
                        }}
                      >
                        More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => navigate("/create")}>
                CREATE
              </button>
            </div>
            <div>
              <h1>Statistic</h1>
            </div>
          </div>
        )
      ) : (
        <div className="dashboard">Loading...</div>
      )}
      <Outlet />
    </div>
  );
}

export default Dashboard;
