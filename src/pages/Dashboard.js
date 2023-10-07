import React from "react";
import {
  Outlet,
  useNavigate,
  useRouteLoaderData,
  Form,
} from "react-router-dom";

function Dashboard() {
  const { restaurant } = useRouteLoaderData("root");
  const navigate = useNavigate();
  return (
    <div>
      <div className="dashboard">
        <div>
          <div className="titleBox">
            <h2 className="title">Your restaurant</h2>
            <button type="button" onClick={() => navigate("/create")}>
              CREATE
            </button>
          </div>
          {restaurant ? (
            restaurant.length === 0 ? (
              <div className="list">
                <h1>You don't have any restaurant</h1>
              </div>
            ) : (
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
                        <input
                          name="restaurantId"
                          value={item._id}
                          hidden
                          readOnly
                        />
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
            )
          ) : (
            <div className="list">Loading...</div>
          )}
        </div>
        <div>
          <h1>Statistic</h1>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
