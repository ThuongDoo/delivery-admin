import { useNavigate, useRouteError } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  useEffect(() => {
    if (error.response?.status == "401") {
      console.log("haha");
      console.log(error.response.status);
      navigate("/login");
    }
  }, [error]);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
