import React, { useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { AuthLayout, Login } from './components/index.js';

const AddPost = lazy(() => import("./pages/AddPost"));
const Signup = lazy(() => import('./pages/Signup'));
const EditPost = lazy(() => import("./pages/EditPost"));
const Post = lazy(() => import("./pages/Post"));
const AllPosts = lazy(() => import("./pages/AllPosts"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <Suspense fallback={<div>Loading...</div>}>
              <AllPosts />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <Suspense fallback={<div>Loading...</div>}>
              <AddPost />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <Suspense fallback={<div>Loading...</div>}>
              <EditPost />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Post />
          </Suspense>
        ),
      },
    ],
  },
]);

function PreloadComponents() {
  useEffect(() => {
    // Preload the components
    import('./pages/EditPost');
    import('./pages/AddPost');
    import('./pages/Signup');
    import('./pages/Post');
    import('./pages/AllPosts');
  }, []);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Preload the components after initial render */}
      <PreloadComponents />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
