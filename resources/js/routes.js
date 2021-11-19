import Notfound from "./components/Notfound";
import Dashboard from "./components/backEnd/dashboard/Dashboard";
import userList from "./components/backEnd/user/users/List"
import userRoleList from "./components/backEnd/user/role/List"
import addUserRole from "./components/backEnd/user/role/Add"
export const routes = [
    {
        path: "*",
        name: "404",
        component: Notfound,
    },
    {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/admin/user-list",
        name: "User list",
        component: userList,
    },
    {
        path: "/admin/user-role-list",
        name: "User role list",
        component: userRoleList,
    },
    {
        path: "/admin/add-user-role",
        name: "Add user role",
        component: addUserRole,
    },
];
