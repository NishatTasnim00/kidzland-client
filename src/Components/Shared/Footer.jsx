import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/abacus-toy.png";
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import facebook from "../../assets/icons/facebook (1).png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-accent md:h-96 grid py-5">
        <section className="w-full max-w-6xl mx-auto text-white space-y-14 md:grid grid-cols-4 gap-28 justify-center p-5">
          <div className="text-center md:text-start pt-10">
            <div className="">
              <img className="h-12 mr-4 md:ml-0" src={logo} alt=""></img>
              <div>
                <p className="font-poppins">
                  Welcome to Fun Learning Toys - the magical world of learning
                  and play! We're here to spark your imagination and make
                  learning an exciting adventure.
                </p>
              
              </div>
            </div>
          </div>
          <div className="text-center md:text-start">
            <h3 className="text-white font-extrabold text-2xl pb-5">
              Usefull Link
            </h3>
            <ul className="list-none font-poppins space-y-2">
              <li>
                <NavLink to="/" aria-label="Home" title="Home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" aria-label="About Us" title="About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" aria-label="Blog" title="Blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-ehitefont-ebgara font-extrabold text-2xl pb-5">
              Contact Now
            </h3>
            <p className="font-poppins">
              55, Banani
              <br />
              Dhaka, Bangladesh
            </p>
            <p className="font-poppins">+88 01750 000 000</p>
            <p className="font-poppins">info@gmail.com</p>
          </div>
          {/* <div className="space-y-2 text-center md:text-start">
						<h3 className="text-ehitefont-ebgara font-extrabold text-2xl pb-5">
							Subscribe
						</h3>
						<p className="font-poppins">Subscribe for our latest materials.</p>

						<div className="flex relative">
							<input
								type="text"
								id="website-admin"
								className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-44 max-w-600 text-sm p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-ehitedark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Email Address"
							></input>
							<span className="absolute right-0 top-0 bottom-0 inline-flex items-center px-8 text-sm text-gray-900 bg-dark-amber border border-r-0 border-gray-300  rounded-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 p-1">
								<FaArrowRight color="gray" />
							</span>
						</div>
					</div> */}
          <nav className="text-center">
		  <h3 className="text-white font-extrabold text-2xl pb-5">
              Usefull Link
            </h3>
            <div className="flex gap-5 cursor-pointer justify-center">
              <a className="hover:text-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="hover:text-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="hover:text-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </section>
        <hr className="text-slate-500 w-10/12 mx-auto mt-5" />
        <p className="text-center text-gray-500 font-extralight">
          &copy; {new Date().getFullYear()} KidzLand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
