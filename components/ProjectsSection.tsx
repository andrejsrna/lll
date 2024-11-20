export default function ProjectsSection() {
    const projects = [
      { name: "Fit Doplnky", url: "https://fitdoplnky.sk" },
      { name: "Zdravie v praxi", url: "https://zdravievpraxi.sk" },
      { name: "Zvieratkaren", url: "https://zvieratkaren.sk" },
      { name: "Najsilnejšia kĺbová výživa", url: "https://najsilnejsiaklbovavyziva.sk" },
      { name: "DoHealth Blog", url: "https://dohealthblog.com" },
      { name: "Obchodák na prenájom", url: "https://www.obchodaknaprenajom.sk" },
      { name: "Andrej Srna", url: "https://andrejsrna.sk" },
    ];
  
    return (
      <section className="bg-white py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Naše projekty</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600">{project.url}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  