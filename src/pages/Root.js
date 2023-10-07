import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
