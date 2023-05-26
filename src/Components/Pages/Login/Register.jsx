import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Provider/AuthProviders';

const Register = () => {
	const { createUser, updateUserData, logOut } = useContext(AuthContext);
	const [regError, setRegError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [checked, setChecked] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.from?.pathname;

	const handleSignIn = async (event) => {
		event.preventDefault();
		setRegError('');
		setSuccess('');
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, email, password , photo);
		if (!password) {
			setRegError('Password is empty');
			return;
		} else if (password.length < 6) {
			setRegError('Password must contain 6 digits.');
			return;
		}
		//  else if (!/(?=.*?[A-Z])/.test(password)) {
		// 	setRegError('Provide at least one Uppercase.');
		// 	return;
		// } else if (!/(?=.*?[a-z])/.test(password)) {
		// 	setRegError('Provide at least one lowercase.');
		// 	return;
		// } else if (!/(?=.*?[0-9])/.test(password)) {
		// 	setRegError('Provide at least one digit.');
		// 	return;
		// } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
		// 	setRegError('Provide at least one special character');
		// 	return;
		// }

		createUser(email, password)
			.then((result) => {
				const createdUser = result.user;
				setSuccess('User has been created successfully!');
				updateUserData(name, photo)
				.then(()=>{
					console.log("profile updated");
				})
				.catch(error => console.log(error));
				console.log(createdUser);
				event.target.reset();
				swal({
					title: 'Welcome!',
					text: 'User has been created successfully!',
					icon: 'success',
					buttons: false,
					className: 'text-red-300',
					closeModal: true,
				});
				logOut()
				navigate(from, { replace: true });
				navigate('/login');
				setRegError('');
			})
			.catch((error) => {
				const text = error.code.split('/');
				const text1 = text[1].split('-').join(' ');
				const err = text1.charAt(0).toUpperCase() + text1.slice(1) + '.';
				// swal(err);

				setRegError(err);
				// alert('Error: '+ err);
			});
		
	};
	

	return (
		<div>
			<div className="min-h-screen bg-base-200 flex justify-center pb-10">
				<div className="hero-content flex-col lg:w-2/5 ">
					<div className="text-center p-5">
						<h1 className="text-5xl font-bold">Register now!</h1>
					</div>
					<div className="card w-10/12 shadow-2xl bg-base-100">
						<form onSubmit={handleSignIn} className="card-body bg-accent">
							<div className="form-control">
								<label className="label">
									<span className="text-form">Name</span>
								</label>
								<input
									type="text"
									name="name"
									placeholder="name"
									// required
									className="input input-bordered"
								/>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="text-form">Photo url</span>
								</label>
								<input
									type="text"
									name="photo"
									placeholder="photo url"
									className="input input-bordered"
								/>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="text-form">Email</span>
								</label>
								<input
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
								{/* <Checkbox /> */}

								<p className="flex gap-2">
									<input type="checkbox" onClick={() => setChecked(!checked)} />

									<label
										// to="/terms"
										className="text-form hover:text-error hover:underline"
										htmlFor="my-modal-3"
									>
										Accept Terms & Condition
									</label>

									{/* The button to open modal */}
									{/* <label htmlFor="my-modal-3" className="btn">
										open modal
									</label> */}

									{/* Put this part before </body> tag */}
									<input
										type="checkbox"
										id="my-modal-3"
										className="modal-toggle"
									/>
									<div className="modal">
										<div className="modal-box relative">
											<label
												htmlFor="my-modal-3"
												className="btn btn-sm btn-circle absolute right-2 top-2"
											>
												✕
											</label>
											{/* <Terms></Terms> */}
										</div>
									</div>
								</p>
							</div>
							<div>
								{regError && <p className="text-secondary">{regError}</p>}
							</div>
							<div>{success && <p className="text-success">{success}</p>}</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary" disabled={!checked && true}>
									Register
								</button>
							</div>
							<p className="text-form text-center">
								Already Have an Account?
								<Link to="/login" className="hover:underline hover:text-error">
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
