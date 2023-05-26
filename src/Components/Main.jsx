import React, { useState } from 'react';
import Nav from './Shared/Nav';
import Footer from './Shared/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProviders';
import Lottie from 'lottie-react';
import img from '../loading.json';

const Main = () => {
    const {loading} =useState(AuthContext)
	if (loading) {
		return (
			<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
				<Lottie className="h-96" animationData={img} loop={true} />
			</div>
		);
        }
    return (
        <>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;