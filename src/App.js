import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
  useRouteLoaderData,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ErrorPage from "./errorPage";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import * as action from "./services/action";
import * as loader from "./services/loader";
import {
  CreateRestaurant,
  UpdateRestaurant,
  Restaurant,
} from "./pages/restaurant";
import { Food, CreateFood, UpdateFood } from "./pages/food";
import Order from "./pages/order/Order";
import Admin from "./pages/Admin";

function App() {
  const userRole = localStorage.getItem("userRole");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route errorElement={<ErrorPage />}>
          <Route
            path="/"
            element={<Root />}
            loader={loader.restaurantLoader}
            id="root"
          >
            <Route
              index
              element={
                userRole === "admin" ? (
                  <Navigate to="admin" replace />
                ) : (
                  <Dashboard />
                )
              }
              action={action.deleteRestaurantAction}
            />
            <Route
              path="create"
              element={<CreateRestaurant />}
              action={action.restaurantAction}
            />
            <Route
              path="update-restaurant/:restaurantId"
              element={<UpdateRestaurant />}
              action={action.restaurantAction}
            />
            <Route
              path="restaurant/:restaurantId"
              element={<Restaurant />}
              id="restaurant"
              loader={loader.foodLoader}
            >
              <Route path="foods" element={<Food />}>
                <Route
                  path=":foodId"
                  element={<UpdateFood />}
                  action={action.foodAction}
                />
                <Route
                  path="create"
                  element={<CreateFood />}
                  action={action.foodAction}
                />
              </Route>
              <Route path="orders" element={<Order />} />
            </Route>
            <Route
              path="admin"
              element={
                userRole === "admin" ? <Admin /> : <Navigate to="/" replace />
              }
            />
          </Route>
        </Route>
        <Route path="login" element={<Login />} action={action.userAction} />
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
