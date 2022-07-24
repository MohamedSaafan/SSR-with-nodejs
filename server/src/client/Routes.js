import React from "react";
import HomePage from "./components/Pages/HomePage";
import UsersListPage from "./components/Pages/UsersListPage";
export default [
  { ...HomePage, path: "/", exact: true },
  {
    path: "/users",
    ...UsersListPage,
  },
];
