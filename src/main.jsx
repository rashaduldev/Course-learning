import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './Pages/HomePage/HomePage';
import AllCourses from './Pages/Course/Allcource/Allcource';
import Courcedetails from './Pages/Course/Allcource/Courcedetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-courses",
        element: <AllCourses />,
      },
      {
        path: "/course/:courseId",
        element: <Courcedetails />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
