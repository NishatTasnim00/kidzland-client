import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';
import person from '../../assets/daughter.png'
import abacus from '../../assets/abacus-toy.png'

const Nav = () => {
	const navigate = useNavigate()
const {user, logOut} = useContext(AuthContext)
const handleLogOut = () => {
	logOut()
		.then()
		.catch((error) => console.log(error.message));
		navigate('/')
};
	const navItems = (
		<>
			<li>
				<NavLink
					to="/"
					aria-label="Home"
					title="Home"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink
					to="/allToys"
					aria-label="All Toys"
					title="All Toys"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					All Toys
				</NavLink>
			</li>
			{user && (
				<li>
					<NavLink
						to="/myToys"
						aria-label="My Toys"
						title="My Toys"
						className={({ isActive }) => (isActive ? 'active' : 'default')}
					>
						My Toys
					</NavLink>
				</li>
			)}

			{user && (
				<li>
					<NavLink
						to="/addAToy"
						aria-label="Add A Toy"
						title="Add A Toy"
						className={({ isActive }) => (isActive ? 'active' : 'default')}
					>
						Add A Toy
					</NavLink>
				</li>
			)}

			<li>
				<NavLink
					to="/about"
					aria-label="About Us"
					title="About"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/blog"
					aria-label="Blog"
					title="Blog"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Blog
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar bg-accent px-8">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-slate-400"
					>
						{navItems}
						<div className="">
							{user ? (
								<div className="">
									<figure
										className="h-16 w-16 rounded-full tooltip tooltip-bottom tooltip-info"
										data-tip={user.displayName ? user?.displayName : 'default'}
									>
										<img
											className="h-16 w-16 rounded-full tooltip tooltip-bottom tooltip-info"
											data-tip={
												user.displayName ? user?.displayName : 'default'
											}
											src={user.photoURL ? user?.photoURL : person}
											alt=""
										/>
									</figure>

									<button onClick={handleLogOut} className="btn-primary">
										Log Out
									</button>
								</div>
							) : (
								<>
									<Link to="/login">
										<button className="btn-primary">Login</button>
									</Link>
								</>
							)}
						</div>
					</ul>
				</div>
				<img className="h-12 w-12" src={abacus} alt="" />
				<Link
					to="/"
					className="ml-2 text-3xl font-bold tracking-wide text-white"
				>
					KidzLand
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="text-xl items-center hidden space-x-8 lg:flex">
					{navItems}
				</ul>
			</div>
			<div className="navbar-end">
				<div className="hidden lg:flex">
					{user ? (
						<div className="hidden lg:flex">
							<figure
								className="h-16 w-16 rounded-full tooltip tooltip-bottom tooltip-info"
								data-tip={user.displayName ? user?.displayName : 'default'}
							>
								<img
									className="h-16 w-16 rounded-full tooltip tooltip-bottom tooltip-info"
									data-tip={user.displayName ? user?.displayName : 'default'}
									src={user.photoURL ? user?.photoURL : person}
									alt=""
								/>
							</figure>

							<button onClick={handleLogOut} className="btn-primary">
								Log Out
							</button>
						</div>
					) : (
						<>
							<Link to="/login">
								<button className="btn-primary">Login</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
