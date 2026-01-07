import React from "react";
import portfolio_image from "/src/assets/portfolio_image.webp";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center md:justify-start order-1 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  src={portfolio_image}
                  alt="Emmanuela Akua Frema Edusei - Front End Developer"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-2 md:order-2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">Emmanuela</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                  Front-End Developer & Designer
                </h2>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate developer who thrives at the intersection of code and creativity. 
                When I'm not crafting beautiful user interfaces, you'll find me experimenting with 
                design systems and exploring new recipes in the kitchen, because there's definitely 
                more to life than a missing semicolon!😅
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 ">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/akuafrema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <Link
              to="/about"
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-r from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                  About Me
                  <HiArrowRight className="text-pink-500 group-hover:translate-x-2 transition-transform duration-300" />
                </h3>
                <p className="text-gray-300">
                  Discover my journey, skills, and what drives my passion for creating exceptional digital experiences.
                </p>
              </div>
            </Link>

            <Link
              to="/contact"
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                  Let's Connect
                  <HiArrowRight className="text-pink-500 group-hover:translate-x-2 transition-transform duration-300" />
                </h3>
                <p className="text-gray-300">
                  Have a project in mind or just want to chat? I'd love to hear from you.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;