
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DeshboardLayout from "./layouts/DeshboardLayout";
import BookPage from "./pages/BookPage";


const router = createBrowserRouter(
  [
    {
      path: 'dashboard',
      element: <DeshboardLayout />,
      children: [
          {
              path: 'home',
              element: <HomePage />,
          },
          {
            path: 'books',
            element: <BookPage />,
        },
        
      ],
  },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/register',
        element:<RegisterPage/>
    },

  ]
)
export default router;