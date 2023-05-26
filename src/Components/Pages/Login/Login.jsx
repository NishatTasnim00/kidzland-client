import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import google from '../../../assets/icons/google.png';
import Lottie from 'lottie-react';
import login from '../../../../src/login.json';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState('');
	const [success, setSuccess] = useState('');
	const emailRef = useRef();
	const location = useLocation();
	const navigate = useNavigate();
	console.log(loginError);
	useEffect(() => {
		console.log(loginError);
	}, [loginError]);
	const { signIn, googleSignIn, resetPass } =
		useContext(AuthContext);
	const from = location.state?.from?.pathname || '/';

	const handleLogIn = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		setLoginError('');
		signIn(email, password)
			.then((result) => {
				const loggedUser = result.user;
				// console.log(loggedUser);
				setSuccess('You are logged in successfully!');
				navigate(from, { replace: true });
			})
			.catch((error) => {
				const text = error.code.split('/');
				const text1 = text[1].split('-').join(' ');
				const err = text1.charAt(0).toUpperCase() + text1.slice(1) + '.';
				setLoginError(err);
				// alert('Error: '+ err);
				swal('Error : ' + err);
				console.log(err);
			});
	};

	const handleGoogleSignIN = () => {
		googleSignIn()
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((error) => console.log(error));
	};

	const handlerRestPassword = (event) => {
		const email = emailRef.current.value;
		if (!email) {
			alert('Please provide your email address to reset password.');
			setLoginError('Please provide your email address to reset password.');
		}
		resetPass(email)
			.then(() => {
				swal('Please check your email');
			})
			.catch((error) => {
				console.log(error, 'reset error');
				setLoginError(error.code);
			});
	};
	return (
		<div>
			<div className="min-h-screen bg-base-200 flex justify-between pb-10 lg:px-20">
				<Lottie
					className="h-96 self-center lg:w-1/2"
					animationData={login}
					loop={true}
				/>

				<div className="hero-content flex-col lg:w-1/2">
					<div className="text-center p-5">
						<h1 className="text-5xl font-bold text-neutral">Login now!</h1>
					</div>
					<form
                    onSubmit={handleLogIn}
						className="card w-9/12 shadow-2xl bg-accent"
					>
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="text-form">Email</span>
								</label>
								<input
									ref={emailRef}
									type="email"
									name="email"
									placeholder="email"
									required
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="text-form">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="password"
									required
									className="input input-bordered"
								/>
								<label className="label">
									<a
										href="#"
										onClick={handlerRestPassword}
										className="text-form hover:text-purple-500"
									>
										Forget password?
									</a>
								</label>
							</div>
							<div>
								{loginError && <p className="text-secondary">{loginError}</p>}
							</div>
							<div>{success && <p className="text-success">{success}</p>}</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
							<p className="text-form text-center">
								Don't Have an Account?
								<Link
									to="/register"
									className="hover:underline hover:text-error"
								>
									Register
								</Link>
							</p>
						</div>
					</form>
					<div>
						<button
							onClick={handleGoogleSignIN}
							className="btn-outlined flex gap-4"
						>
							<img
								src={google}
								alt=""
								className="h-7 hover:scale-110 hover:link"
							/>
							sign up with google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
