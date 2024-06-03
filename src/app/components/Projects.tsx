
export function ProjectsPage() {
    const projects = [
        {
            id: "1",
            title: "Personal Tutor Application",
            description: "Backend for a tutoring system for a University. ",
            url: "https://personal-tutor-app-development.up.railway.app/api/schema/swagger-ui/#/",
            published: true,
            creators: ["Babalola Opeyemi"],
        },
        {
            id: "2",
            title: "Tutorial Hub FrontEnd",
            description: "Frontend for a project in completion of my Msc Computing",
            url: "https://tutorial-hub-umber.vercel.app/",
            published: true,
            creators: ["Babalola Opeyemi"],
        },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div key={project.id} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <div className="p-6">
                                    <h2 className="text-lg font-medium text-gray-900 title-font mb-4">{project.title}</h2>
                                    <p className="leading-relaxed mb-3">{project.description}</p>
                                    <div className="flex items-center flex-wrap ">
                                        {project.url && (
                                            <a href={project.url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Link
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Projects() {
    return <ProjectsPage />;
}
