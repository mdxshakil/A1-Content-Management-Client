import { createBrowserRouter } from "react-router-dom";
import ContentDetails from "../PAGES/ContentDetails";
import AddContent from "../PAGES/dashboard/AddContent";
import EditContent from "../PAGES/dashboard/EditContent";
import ManageContent from "../PAGES/dashboard/ManageContent";
import Home from "../PAGES/Home";
import ReadingHistory from "../PAGES/ReadingHistory";
import Dashboard from "./Dashboard/Dashboard";
import Main from "./Main/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/content/:id',
                element: <ContentDetails></ContentDetails>
            },
            {
                path: '/readinghistory',
                element: <ReadingHistory></ReadingHistory>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    {
                        path:'/dashboard',
                        element:<AddContent></AddContent>
                    },
                    {
                        path:'/dashboard/managecontent',
                        element:<ManageContent></ManageContent>
                    },
                    {
                        path:'/dashboard/:id',
                        element:<EditContent></EditContent>
                    }
                ]
            },
        ]

    }
])

export default routes;