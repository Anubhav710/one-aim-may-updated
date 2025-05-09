"use client";

import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log("Login:", { email, password });
    } else {
      // Handle signup logic
      console.log("Signup:", { name, email, password, confirmPassword });
    }
  };

  return (
    <div className="h-screen">
      <div className="flex md:flex-row h-full">
        {/* Left Form Section */}
        <div className="lg:w-[50%] xl:w-[40%] 2xl:w-[60%] w-full flex flex-col justify-center px-6 sm:px-12 md:px-28 py-10">
          <h1 className="text-3xl text-center font-bold mb-6">
            {isLogin ? "Welcome Back" : "Create an Account"}
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

          <form onSubmit={handleSubmit} className="space-y-7">
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-7 py-4 border border-[#FF7B07] rounded-full focus:border-[#ff7b0775] focus:outline-none focus:ring-0 transition-colors duration-200"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-7 py-4 border border-[#FF7B07] rounded-full focus:border-[#ff7b0775] focus:outline-none focus:ring-0 transition-colors duration-200"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-7 py-4 border border-[#FF7B07] rounded-full focus:border-[#ff7b0775] focus:outline-none focus:ring-0 transition-colors duration-200"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-7 py-4 border border-[#FF7B07] rounded-full focus:border-[#ff7b0775] focus:outline-none focus:ring-0 transition-colors duration-200"
              />
            )}
            <button
              type="submit"
              className="bg-[#961313] hover:bg-black text-white transition-all duration-500 px-7 py-3 w-full rounded-full"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-2">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="underline text-primaryred"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>

        {/* Right Image Section - hidden on mobile */}
        <div className="hidden lg:block lg:w-[50%] xl:w-[60%] 2xl:w-[50%] h-full">
          <img
            src="/images/auth/login-image.png"
            alt="Bookshelf"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
