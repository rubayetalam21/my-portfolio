import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Home";
import ProjectDetails from "../ProjectDetails";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";





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
            {
                path: 'skills',
                element: <Skills />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
             {
                path: 'contact',
                element: <Contact />,
            },

        ],
    },


]);

export default router;