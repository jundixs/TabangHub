"use client";

import * as React from 'react';

export default function Profile() {
  return (
    <div className="bg-gray-300 font-sans min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white p-8 shadow-lg rounded-3xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Jundix Pepino</h1>
          <p className="text-xl text-gray-600 mb-4"> Volunteer</p>
        </header>

        {/* Profile Section */}
        <section className="flex items-center mb-8 rounded-lg overflow-hidden bg-gray-50 p-6">
          <div className="w-40 h-40 flex-shrink-0">
            {/* Ensure the profile picture is a circle */}
            <img
              src="/images/choy.png" // Assuming the image is located in the public folder at /images
              alt="Profile Picture"
              className="w-full h-full rounded-full object-cover border-4 border-gray-200"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700">
            Enthusiastic and deeply committed to volunteer work. Dedicated to making a positive effect and supporting community activities using my expertise. I'm excited to contribute to worthwhile initiatives and have experience in a variety of dancing forms.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Performance </li>
            <li>Event Coordination</li>
            <li>Team Collaboration</li>
            <li>Public Speaking</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Dance Workshops</h3>
              <p className="text-gray-700 mb-2">Organized and led dance workshops for local youth, providing a platform for creative expression and physical activity.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Charity Dance Events</h3>
              <p className="text-gray-700 mb-2">Participated in charity dance events to raise funds for various causes, showcasing performances and engaging with the community.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Testimonials</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 rounded-lg bg-white p-4 shadow-sm">
              <p>"Jundix's dedication to the community and exceptional skills in dance have been a great asset to our organization."</p>
              <footer className="mt-2 text-gray-600">- Community Organizer</footer>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 rounded-lg bg-white p-4 shadow-sm">
              <p>"A true professional with a heart for volunteering. Jundix's contributions have made a significant impact."</p>
              <footer className="mt-2 text-gray-600">- Event Coordinator</footer>
            </blockquote>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Email: <a href="mailto:jundix.pepino@example.com" className="text-blue-500 hover:underline">jundix.pepino@example.com</a>
            </li>
            <li>Phone: (032) 263-8016</li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/jundixpepino" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/jundixpepino</a>
            </li>
            <li>
              Website: <a href="https://www.jundixpepino.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">jundixpepino.com</a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-8">
          <p>&copy; 2024 Jundix Pepino. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
