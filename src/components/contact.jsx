import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker, HiArrowLeft } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=akua-frema-492853373",
      ariaLabel: "Connect on LinkedIn"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/akuafrema",
      
      ariaLabel: "View GitHub Profile"
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://x.com/akuafrema06",
     
      ariaLabel: "Follow on Twitter"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/xx.frema?igsh=em5zM2hzbm92djg4",
      
      ariaLabel: "Follow on Instagram"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always excited to connect with fellow developers, designers, and creative minds. Let's build something amazing together.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-semibold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 rounded-lg text-white font-semibold hover:transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center shrink-0">
                      <HiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=akuafrema006@example.com&body"
                       target="_blank"
                        className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                      >
                        akuafrema006@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center shrink-0">
                      <HiPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+233532970591" 
                        className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                      >
                        +233 532 970 591
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center shrink-0">
                      <HiLocationMarker className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-300">Kumasi, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Connect on Social Media</h2>
                <div className="grid grid-cols-2 gap-4 ">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className={`flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:border-pink-500/50 ${social.color}`}
                      >
                        <Icon className="text-2xl" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Back to Home Link */}
              <Link
                to="/"
                className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
              >
                <HiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Optional: Availability Status */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-300">Currently available for freelance projects</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;