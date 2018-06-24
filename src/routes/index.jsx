import Pages from "layouts/Pages.jsx";
import Login from "views/Login/Login.jsx";
import Logout from "views/Login/Logout.jsx";
import Dashboard from "layouts/Dashboard.jsx";
import Insights from "layouts/Insights.jsx";
import Welcome from "layouts/Welcome.jsx";
import Callback from "components/Callback/Callback"

const indexRoutes = [
    {path: "/pages", name: "Pages", component: Pages, private: true},
    {path: "/test", name: "Home", component: Insights, private: true},
    {path: "/dashboard", name: "Home", component: Dashboard, private: true},
    {path: "/welcome", name: "Welcome", component: Welcome, private: true},
    {path: "/callback", name: "Callback", component: Callback},
    {path: "/login", name: "Login", component: Login},
    {path: "/logout", name: "Logout", component: Logout},
    {path: "/", name: "Home", private: true, component: Dashboard}
];

export default indexRoutes;
