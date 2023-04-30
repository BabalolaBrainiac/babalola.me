"use client";

import React from "react";

export default function NavBar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const [flyer, setFlyer] = React.useState(false);
	const [flyerTwo, setFlyerTwo] = React.useState(false);

	return (
		<nav className="fixed top-0 w-full clearNav z-50 navbar-end items-center flex mx-4 focus:outline-none bg-transparent">
			<div className="max-w-5xl mx-auto flex-wrap p-5 flex-col md:flex-row pb-3 pt-10 pr-10 flex mr-9 hover-button">
				<a
					href="https://iconscout.com/contributors/pocike"
					rel="noopener noreferrer"
					target="_blank"
					className="invisible md:visible ">
					<svg
						className="bg-gradient-to-r  from-cyan-300 to-purple-500 border-white stroke-cyan-100 
						rounded-full hover:from-black hover:fill-black hover-svg"
						width="60"
						height="60"
						viewBox="-30 -30 90 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M23.4 11.1053C25.9461 11.1053 28.3879 12.1699 30.1883 14.065C31.9886 15.9601 33 18.5305 33 21.2105V33H26.6V21.2105C26.6 20.3172 26.2629 19.4604 25.6628 18.8287C25.0627 18.197 24.2487 17.8421 23.4 17.8421C22.5513 17.8421 21.7374 18.197 21.1373 18.8287C20.5372 19.4604 20.2 20.3172 20.2 21.2105V33H13.8V21.2105C13.8 18.5305 14.8115 15.9601 16.6118 14.065C18.4122 12.1699 20.854 11.1053 23.4 11.1053Z"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M7.39999 12.7895H1V33H7.39999V12.7895Z"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.2 7.73684C5.9673 7.73684 7.39999 6.22874 7.39999 4.36842C7.39999 2.50809 5.9673 1 4.2 1C2.43269 1 1 2.50809 1 4.36842C1 6.22874 2.43269 7.73684 4.2 7.73684Z"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
				<a
					data-v-54e46119=""
					href="https://github.com/"
					rel="noopener noreferrer"
					target="_blank"
					className="pl-7 invisible md:visible">
					<svg
						className="bg-gradient-to-r from-cyan-300 to-purple-500 border-white stroke-cyan-300 rounded-full
						hover:from-black hover:fill-black hover-svg"
						width="60"
						height="60"
						viewBox="-30 -30 90 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.4872 28.4344C4.28205 30.7172 4.28205 24.6297 1 23.8688M23.9744 33V27.1104C24.0359 26.3847 23.9302 25.6552 23.6642 24.9703C23.3983 24.2854 22.9781 23.6609 22.4318 23.1383C27.5846 22.6056 33 20.7946 33 12.4852C32.9996 10.3604 32.1183 8.31713 30.5385 6.77822C31.2865 4.91927 31.2336 2.8645 30.3908 1.04078C30.3908 1.04078 28.4544 0.508122 23.9744 3.29314C20.2131 2.34779 16.2484 2.34779 12.4872 3.29314C8.00718 0.508122 6.07077 1.04078 6.07077 1.04078C5.2279 2.8645 5.17501 4.91927 5.92308 6.77822C4.33149 8.32854 3.44927 10.3903 3.46154 12.5309C3.46154 20.7794 8.87692 22.5904 14.0297 23.184C13.4898 23.7013 13.0735 24.3184 12.8077 24.9949C12.5419 25.6713 12.4327 26.3922 12.4872 27.1104V33"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		</nav>
	);
}
