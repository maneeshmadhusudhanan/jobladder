import React from 'react';

const EmployerAddJob = () => {
  return (
    <>
      <main className="p-8">
        {/* Page Title */}
        <h1 className="text-4xl text-center font-bold text-blue-600 animate-bounce">
          Manage Jobs
        </h1>

        {/* Job Management Form */}
        <div className="flex justify-center mt-10">
          <form className="bg-blue-50 p-8 rounded-lg shadow-xl w-3/4 transition-transform duration-300 hover:scale-105">
            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-lg text-blue-700">Job Title</label>
              <input
                type="text"
                placeholder="Enter Job Title"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Job Description */}
            <div className="mb-4">
              <label className="block text-lg text-blue-700">Job Description</label>
              <textarea
                placeholder="Enter Job Description"
                className="w-full border rounded-lg p-2 h-32 focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            {/* Job Type */}
            <div className="mb-4">
              <label className="block text-lg text-blue-700">Job Type</label>
              <select className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
              </select>
            </div>

            {/* Salary */}
            <div className="mb-4">
              <label className="block text-lg text-blue-700">Salary</label>
              <input
                type="number"
                placeholder="Enter Salary"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-transform duration-300 transform hover:scale-105"
              >
                Add Job
              </button>
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-transform duration-300 transform hover:scale-105"
              >
                Remove Job
              </button>
              <button
                type="button"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
              >
                Edit Job
              </button>
              <button
                type="button"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-transform duration-300 transform hover:scale-105"
              >
                Check Status
              </button>
            </div>
          </form>
        </div>

        {/* Saved User Profiles Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 animate-pulse">
            Saved User Profiles
          </h2>

          {/* User Profiles Table */}
          <table className="w-full mt-6 border shadow-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-blue-50">
              {/* Example Profile */}
              <tr className="text-center border-b">
                <td className="p-4">John Doe</td>
                <td className="p-4">john@example.com</td>
                <td className="p-4">+1234567890</td>
                <td className="p-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-transform transform hover:scale-110">
                    View
                  </button>
                </td>
              </tr>
              {/* Add more rows dynamically as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default EmployerAddJob;
