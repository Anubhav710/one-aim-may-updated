"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="h-[90vh] bg-peach-50">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Form Section */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-28 py-10">
          <h1 className="text-3xl text-center font-bold mb-6">
            Create an Account
          </h1>

          <button className="w-full bg-white text-gray-700 font-semibold py-4 rounded-full mb-4 flex items-center justify-center border border-gray-300">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="px-4 text-gray-500 font-medium">or</div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <form className="space-y-7">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-7 py-4 border border-[#FF7B07] rounded-full focus:border-[#ff7b0775] focus:outline-none focus:ring-0 transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-7 py-4 border border-[#FF7B07] rounded-full focus:border-[#ff7b0775] focus:outline-none focus:ring-0 transition-colors duration-200"
            />
            <button className="bg-[#961313] hover:bg-black text-white transition-all duration-500 px-7 py-3 w-full rounded-full">
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <a href="#" className="underline text-primaryred">
              Login
            </a>
          </p>
        </div>

        {/* Right Image Section - hidden on mobile */}
        <div className="hidden md:block flex-1 h-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Bookshelf"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
