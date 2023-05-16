import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
            { path: 'admin', element: <Admin></Admin> },
        ]
    }
])
export default router