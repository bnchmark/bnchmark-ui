// import RTL from "layouts/RTL.jsx";
import Pages from "layouts/Pages.jsx";
import Dashboard from "layouts/Dashboard.jsx";
import Callback from "components/Callback/Callback"

const indexRoutes = [
    // {path: "/rtl", name: "RTL", component: RTL},
    {path: "/pages", name: "Pages", component: Pages},
    {path: "/dashboard", name: "Home", component: Dashboard, private: true},
    {path: "/callback", name: "Callback", component: Callback},
    { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
