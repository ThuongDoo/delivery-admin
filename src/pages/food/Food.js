import React from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import "boxicons";

function Food() {
  const { food } = useRouteLoaderData("restaurant");
  const navigate = useNavigate();
  return (
    <div className="restaurant-outlet">
      <div>
        <div className="restaurant-title">
          <h2 className="">Foods</h2>
          <button onClick={() => navigate("create")}>Create</button>
        </div>
        {food ? (
          food.length === 0 ? (
            <div className="list">
              <h2>You don't have any food</h2>
            </div>
          ) : (
            <div className="list">
              {food.map((item, index) => (
                <NavLink
                  to={`${item._id}`}
                  className="restaurant-outlet-item"
                  key={index}
                >
                  <div>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                  </div>
                  <button>
                    <box-icon name="trash"></box-icon>
                  </button>
                </NavLink>
              ))}
            </div>
          )
        ) : (
          <div className="list">
            <h2>Loading...</h2>
          </div>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Food;
