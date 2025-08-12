import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Home";
import ProjectDetails from "../ProjectDetails";





const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>,
            },
            {
                path: 'projects/:id',   // dynamic route for project details
                element: <ProjectDetails />,
            },

        ],
    },


]);

export default router;