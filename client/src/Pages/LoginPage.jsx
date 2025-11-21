"use client";
import React, { useState } from "react";

export default function AuthPage() {
  const [pageView, setPageView] = useState("login"); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(
      pageView === "login" ? "Login with Email:" : "Signup with Email:",
      { username, email, password }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* LEFT: FORM */}
          <div className="w-full lg:w-[42%] max-w-md">
            <div className="space-y-6 sm:space-y-8">

              {/* HEADER */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
                  {pageView === "login" ? "Welcome Back 👋" : "Create Account ✨"}
                </h1>

                <p className="text-gray-600 text-sm sm:text-base">
                  {pageView === "login"
                    ? "Sign in to continue."
                    : "Create your account to get started."}
                </p>
              </div>

              {/* FORM INPUTS */}
              <div className="space-y-4 sm:space-y-5">
                
                {/* USERNAME ONLY FOR SIGNUP */}
                {pageView === "signup" && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* EMAIL */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />

                  {/* ONLY LOGIN SHOWS FORGOT PASSWORD */}
                  {pageView === "login" && (
                    <div className="text-right mt-2">
                      <button className="text-blue-600 text-sm hover:underline">
                        Forgot Password?
                      </button>
                    </div>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-all"
                >
                  {pageView === "login"
                    ? "Login with Email"
                    : "Sign up with Email"}
                </button>
              </div>

              {/* SWITCH PAGE VIEW */}
              <p className="text-center text-gray-600 text-sm sm:text-base pt-2">
                {pageView === "login" ? (
                  <>
                    Don’t have an account?{" "}
                    <button
                      onClick={() => setPageView("signup")}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setPageView("login")}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Login
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full lg:w-[50%] flex justify-end">
            <img
              src="/Lo.png"
              alt="Auth Illustration"
              className="w-full max-w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
