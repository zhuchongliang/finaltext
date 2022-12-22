import React, { lazy, Suspense } from 'react';
import { useRoutesWithMiddleware } from "react-router-middleware-plus";  
import HomeLayout from '../layouts/HomeLayout';
import NotFound from '../layouts/NotFound';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SuspenseComponent = ( Component ) => ( props ) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}
const checkForLogin = ({ children }) => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("username");
  useEffect(() => {
    if (!userInfo) {
      return navigate("/register");
    } 
  }, [userInfo])
  return !userInfo ? null : children; 
}

const IdentifyComponent = lazy(() => import("../pages/identify"));
const ShopListComponent = lazy(() => import("../pages/shopping"));
const WashComponent = lazy(() => import("../pages/wash"));
const MyComponent = lazy(() => import("../pages/my"));
const ShopComponent = lazy(() => import("../pages/shop"));
const SearchComponent = lazy(() => import("../pages/search"))
const KindComponent = lazy(() => import("../pages/kind"))
const LoginComponent = lazy(() => import("../pages/login"))
const RegisterComponent = lazy(() => import("../pages/register"));

export default function Router() {
  const routes = [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/shop" />
        },
        {
          path: "/shop",
          element: <Suspense fallback={null}><ShopListComponent></ShopListComponent></Suspense>,
          children: [
            {
              path: ":id",
              element: <Suspense fallback={null}><ShopComponent></ShopComponent></Suspense>,
            }
          ]
        },
        {
          path: "/identify",
          element: <Suspense fallback={null}><IdentifyComponent></IdentifyComponent></Suspense>
        },
        {
          path: "/wash",
          element: <Suspense fallback={null}><WashComponent></WashComponent></Suspense>
        },
        {
          path: "/my",
          middleware: [checkForLogin],
          element: <Suspense fallback={null}><MyComponent></MyComponent></Suspense>
        },
        {
          path: "/search",
          element: <Suspense fallback={null}><SearchComponent></SearchComponent></Suspense>
        },
        {
          path: "/kind",
          element: <Suspense fallback={null}><KindComponent></KindComponent></Suspense>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    },
    {
      path: "/login",
      element: <Suspense fallback={null}><LoginComponent></LoginComponent></Suspense>
    },
    {
      path: "/register",
      element: <Suspense fallback={null}><RegisterComponent></RegisterComponent></Suspense>
    }
  ];
  return useRoutesWithMiddleware(routes);
}
