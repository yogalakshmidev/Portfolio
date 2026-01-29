import React from "react";
import { projects } from "../../constants";

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          MERN Stack Projects with complete frontend & backend implementation
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-purple-500/30 transition"
          >
            {/* Project Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                Tech Stack
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-lg font-semibold"
                >
                  Frontend GitHub
                </a>
              )}

              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-lg font-semibold"
                >
                  Backend GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
