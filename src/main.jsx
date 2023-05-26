import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './Components/Main.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import Login from './Components/Pages/Login/Login';
import AuthProviders from './Components/Provider/AuthProviders';
import Register from './Components/Pages/Login/Register';
import ErrorPage from './Components/Pages/ErrorPage';
import AddAToy from './Components/Pages/AddAToy/AddAToy';
import PrivateRoute from './Components/Route/PrivateRoute';
import AllToys from './Components/Pages/AllToys/AllToys';
import SingleToy from './Components/Pages/AllToys/SingleToy';
import MyToys from './Components/Pages/MyToys/MyToys';
import BlogPage from './Components/Pages/Blog/BlogPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/addAToy',
				element: (
					<PrivateRoute>
						<AddAToy></AddAToy>
					</PrivateRoute>
				),
			},
			{
				path: '/allToys',
				element: <AllToys></AllToys>,
			},
			{
				path: '/products/:id',
				element: (
					<PrivateRoute>
						<SingleToy></SingleToy>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5173/products/${params.id}`),
			},
			{
				path: '/myToys',
				element: (
					<PrivateRoute>
						<MyToys></MyToys>
					</PrivateRoute>
				),
			},
			{
				path:'/blog',
				element:<BlogPage></BlogPage>
			}
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProviders>
			<RouterProvider router={router} />
		</AuthProviders>
	</React.StrictMode>
);
