
import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DeshboardLayout from "./layouts/DeshboardLayout";
import BookPage from "./pages/BookPage";
import AuthLayout from "./layouts/AuthLayout";
import CreateBook from "./pages/CreateBook";


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to="/dashboard/home" />,
  },
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
        {
          path: 'books/create',
          element: <CreateBook />,
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