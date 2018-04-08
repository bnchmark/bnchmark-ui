import Pages from "layouts/Pages.jsx";
import RTL from "layouts/RTL.jsx";
import Dashboard from "layouts/Dashboard.jsx";

const indexRoutes = [
    {path: "/rtl", name: "RTL", component: RTL},
    {path: "/pages", name: "Pages", component: Pages},
    {path: "/dashboard", name: "Home", component: Dashboard, private: true},
    {path: "/", name: "Home", component: Dashboard}
];

export default indexRoutes;
