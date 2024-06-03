"use client";

import { useState } from 'react';
import { ProjectsPage } from './Projects';

export default function MainBody() {
	const [showProjects, setShowProjects] = useState(false);

	const handleProjectsClick = () => {
		setShowProjects(true);
	};

	return (
		<main className="bg-background">
			<section className="text-gray-600 body-font">
				<div className="max-w-5xl pt-52 mx-auto m-56">
					<div className="space-x-20 absolute inline-flex items-center -ml-44 space-y-reverse space-y-64 -mt-14">
						<h1 className="mb-10 relative -mt-52 text-white">def</h1>
						<h1
							className="mb-10 text-transparent bg-clip-text 
						group bg-gradient-to-br from-cyan-300 to-purple-600
						scale-x-95 contrast-200 saturate-200
						">
							welcome_to_the_krypt
						</h1>
						<span className="mb-10 bracket text-white">():</span>
					</div>

					<div className="ml-14 text-center absolute mt-40">
						<button
							className="ml-11 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2
                    overflow-hidden text-sm font-medium text-gray-900 rounded-full fill-cyan-300
                    group bg-gradient-to-br from-cyan-300 to-purple-600 group-hover:from-cyan-100 via-cyan-600 group-hover:to-purple-250
                    hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-300
                    dark:focus:ring-white-800 border-2 border-white 
						  transform bg-blue-400 transition duration-500 hover:scale-x-95 contrast-200 saturate-200
                    "
							onClick={handleProjectsClick}
						>
							<div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-full group-hover:bg-opacity-0">
								<div className="h-9 w-36 px-6 m-2 flex text-1xl justify-center">
									<span className="align-middle pt-2">Projects</span>
								</div>
							</div>
						</button>

						<button
							className="ml-11 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2
                    overflow-hidden text-sm font-medium text-gray-900 rounded-full fill-cyan-300
                    group bg-gradient-to-br from-cyan-300 to-purple-600 group-hover:from-cyan-100 via-cyan-600 group-hover:to-purple-250
                    hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-300
                    dark:focus:ring-white-800 border-2 border-white 
						  transform bg-blue-400 transition duration-500 hover:scale-x-95 contrast-200 saturate-200
                    ">
							<a
								className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-full group-hover:bg-opacity-0"
								href="https://docs.google.com/document/d/16kJ71LQalL32u5rPiYGIZ-5JjmNElKMpVuQA8FpeLdA/edit?usp=sharing" target="_blank">
								<div className="h-9 w-36 px-6 m-2 flex text-1xl justify-center">
									<span className="align-middle pt-2">Resume</span>
								</div>
							</a>
						</button>

						<button
							className="ml-11 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2
                    overflow-hidden text-sm font-medium text-gray-900 rounded-full fill-cyan-300
                    group bg-gradient-to-br from-cyan-300 to-purple-600 group-hover:from-cyan-100 via-cyan-600 group-hover:to-purple-250
                    hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-300
                    dark:focus:ring-white-800 border-2 border-white 
						  transform bg-blue-400 transition duration-500 hover:scale-x-95 contrast-200 saturate-200
                    ">
							<a
								className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-full group-hover:bg-opacity-0"
								href="https://medium.com/@babalolaopedaniel" target="_blank">
								<div className="h-9 w-36 px-6 m-2 flex text-sm justify-center text-1xl">
									<span className="align-middle pt-2">Musings</span>
								</div>
							</a>
						</button>
					</div>
				</div>
				{/* Ends Index Page */}
			</section>
			{showProjects && <ProjectsPage />}
		</main>
	);
}


