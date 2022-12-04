import el from "date-fns/esm/locale/el/index.js";
import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../../PrivetRoute/PrivetRoute";
import AllUsers from "../AllUsers/AllUsers";
import Main from "../LayOut/Main";
import About from "../Pages/About";
import Appoinment from "../Pages/Appoinment";
import ContactsUs from "../Pages/ContactsUs";
import Dashboard from "../Pages/Dashboard";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment";
import DashboardLayout from "../Pages/DashboardLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyAppoinment from "../Pages/MyAppoinment";
import Profile from "../Pages/Profile";
import Reviews from "../Pages/Reviews";
import SingUp from "../Pages/SingUp";
import AdminRoute from "./AdminRoute";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appoinment',
                element: <PrivetRoute> <Appoinment></Appoinment></PrivetRoute>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contactUs',
                element: <PrivetRoute><ContactsUs></ContactsUs></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute> <DashboardLayout /></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/appoinment',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:payid',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-ten-alpha.vercel.app/bookings/${params.payid}`)

            },

        ]
    }


])

export default route;