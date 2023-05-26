import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';
import Lottie from 'lottie-react';
import img from '../../loading.json';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const PrivateRoute = ({children}) => {
   	const { user, loading } = useContext(AuthContext);
		const location = useLocation();
		if (loading) {
			return (
				<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
					<Lottie className="h-96" animationData={img} loop={true} />
				</div>
			);
		}
		if (user) {
			return children;
		}
		else{
			swal("You have to log in first to view details");
			return <Navigate state={{ from: location }} to="/login"></Navigate>;
		}
		
};

export default PrivateRoute;