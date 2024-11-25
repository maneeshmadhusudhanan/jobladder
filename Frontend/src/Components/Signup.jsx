import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";  // Ensure this contains relevant styling
import image from '../Images/join-us-recruitment-online-technology-website-concept_53876-21154.avif';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // To handle error message

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/admin/jobladderSignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
          role,
        }),
        credentials: 'include', // Ensure credentials (cookies) are sent with the request
      });

      const text = await response.text();  // Get raw response text
      console.log("Raw response:", text); // Log the raw response for debugging

      let data;
      try {
        data = JSON.parse(text);  // Try to parse JSON from the response
      } catch (e) {
        console.error("Error parsing JSON:", e);
        data = { message: "Unexpected error" };
      }

      if (response.ok) {
        console.log('User successfully registered!', data);
        // Redirect or take further action here
      } else {
        console.error('Signup failed:', data);
        setErrorMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="flex mx-[10%] gap-[5%] mb-10 my-[10%]">
        {/* Job-related Picture */}
        <div className="w-1/2">
          <img
            src={image}
            alt="Job-related"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Signup Form Section */}
        <div className="w-1/2 p-8 space-y-6 bg-white border-4 rounded-md shadow-2xl shadow-blue-600 border-blue-600">
          <h2 className="text-3xl font-bold text-center text-blue-800 mt-4">
            SIGN UP FOR JOB LADDER
          </h2>
          <form className="mt-6" onSubmit={handleSignup}>
            {/* First Name Input */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-blue-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            {/* Last Name Input */}
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-blue-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-blue-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-blue-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            {/* Dropdown Menu for Role Selection */}
            <div className="relative inline-block text-left mb-4">
              <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                Select Role
              </label>
              <select
                id="role"
                name="role"
                className="block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>
                  -- Select Role --
                </option>
                <option value="user">USER</option>
                <option value="employer">EMPLOYER</option>
                <option value="admin">ADMIN</option>
              </select>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full px-16 py-2 mt-6 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none"
            >
              Sign Up
            </button>
          </form>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-sm text-center text-red-600 mt-4">
              {errorMessage}
            </p>
          )}

          {/* Login Link */}
          <p className="text-sm text-center text-blue-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-900">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
