import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ErrorPage from "./errorPage";
import Root from "./pages/Root";
import Dashboard, { loader as dashboardLoader } from "./pages/Dashboard";
// import CreateRestaurant from "./pages/restaurant/CreateRestaurant";
// import UpdateRestaurant from "./pages/restaurant/UpdateRestaurant";

import * as action from "./services/action";
import * as loader from "./services/loader";
// import Restaurant from "./pages/restaurant/Restaurant";
import {
  CreateRestaurant,
  UpdateRestaurant,
  Restaurant,
} from "./pages/restaurant";
import Food from "./pages/food/Food";
import Order from "./pages/order/Order";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route errorElement={<ErrorPage />}>
          <Route
            path="/"
            element={<Root />}
            loader={loader.dashboardLoader}
            id="root"
          >
            <Route
              index
              element={<Dashboard />}
              action={action.deleteRestaurantAction}
            />
            <Route
              path="create"
              element={<CreateRestaurant />}
              action={action.restaurantAction}
            />
            <Route
              path="update-restaurant/:id"
              element={<UpdateRestaurant />}
              action={action.restaurantAction}
            />
            <Route path="restaurant/:id" element={<Restaurant />}>
              <Route path="foods" element={<Food />} />
              <Route path="orders" element={<Order />} />
            </Route>
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
