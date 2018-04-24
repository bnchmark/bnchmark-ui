// import RTL from "layouts/RTL.jsx";
import Pages from "layouts/Pages.jsx";
import Login from "views/Login/Login.jsx";
import Dashboard from "layouts/Dashboard.jsx";
import Callback from "components/Callback/Callback"

const indexRoutes = [
    {path: "/pages", name: "Pages", component: Pages},
    {path: "/dashboard", name: "Home", component: Dashboard, private: true},
    {path: "/callback", name: "Callback", component: Callback},
    {path: "/login", name: "Login", component: Login},
    {path: "/", name: "Home", component: Dashboard}
];

export default indexRoutes;
