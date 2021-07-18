import Login from "../pages/Login";
import Main from "../pages/Main";

export default [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/",
    component: Main,
    exact: true,
  },
];
