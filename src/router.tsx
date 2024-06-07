
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DeshboardLayout from "./layouts/DeshboardLayout";
import BookPage from "./pages/BookPage";
import AuthLayout from "./layouts/AuthLayout";


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
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            path: 'register',
            element: <RegisterPage />,
        },
    ],
},

  ]
)
export default router;