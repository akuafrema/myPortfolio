import React from "react";
import { Link } from "react-router-dom";
import {
  HiAcademicCap,
  HiCode,
  HiSparkles,
  HiArrowRight,
} from "react-icons/hi";
import calculator from "/src/assets/calculator.webp";
function About({ image, name, lang }) {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Python",
    "C",
    "C++",
    "HTML5",
    "MySQL"
  ];

  const projects = [
    "Sign-up Form",
    "To-Do Application",
    "Digital Calculator",
    "Online Bookstore",
    "Coding Website",
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
                Me
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Developer, Designer, and Lifelong Learner
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Introduction Card */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <HiSparkles className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Hello, I'm Emmanuela
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed">
                I'm a passionate developer who loves turning creative ideas into
                functional, beautiful web experiences. My journey in tech is
                driven by curiosity and a desire to create digital solutions
                that make a real impact.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HiAcademicCap className="text-pink-500 text-2xl mt-1 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Education</h3>
                    <p className="text-gray-300">
                      Currently pursuing a BSc in Computer Engineering at Kwame
                      Nkrumah University of Science and Technology (Level 300).
                      Outside of class, I dedicate my time to exploring emerging
                      technologies and expanding my knowledge across different
                      areas of tech.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiCode className="text-purple-500 text-2xl mt-1 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">What I Do</h3>
                    <p className="text-gray-300">
                      Beyond coding, I enjoy exploring design principles,
                      learning new technologies, and collaborating on meaningful
                      projects. My goal is to create digital experiences that
                      inspire and make life easier for users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-linear-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-white text-sm font-medium hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects & Featured Work Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projects List */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-linear-to-r from-pink-500 to-purple-500"></div>
                    <span className="text-gray-300">{project}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/akuafrema"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 font-medium transition-colors duration-300"
              >
                View all projects on GitHub
                <HiArrowRight className="text-lg" />
              </a>
            </div>

            {/* Featured Project Card */}
            {image && name && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Featured Project
                </h2>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 "></div>

                  <img
                    src={calculator}
                    alt={name}
                    className="relative w-full h-64 object-cover rounded-xl mb-4"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {name}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  <span className="text-gray-500">Tech Stack:</span> {lang}
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Interested in collaborating or have a project in mind? I'd love
                to hear from you.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold hover:transition-all duration-300 hover:scale-105"
              >
                Get in Touch
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
