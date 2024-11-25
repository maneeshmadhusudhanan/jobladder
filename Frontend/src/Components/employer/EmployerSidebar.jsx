import React from "react";

const EmployerSidebar = ({ setCurrentPage }) => {
  return (
    <div>
      <aside className="w-64 bg-blue-600 text-white min-h-screen flex flex-col">
        <div className="p-4 text-center">
          <img
            src="/Frontend/src/Images/Polish_20230516_022418225.jpg"
            alt="Profile"
            className="rounded-full w-16 h-16 mx-auto"
          />
          <h2 className="mt-4 text-xl font-bold">JOB LADDER</h2>
        </div>

        <hr className="border-blue-100 mx-4" />

        <nav>
          <ul className="space-y-4 mt-4 px-4">
          <li>
              <button
                className="w-full text-left p-2 hover:bg-blue-500 rounded"
                onClick={() => setCurrentPage("profile")}
              >
                HOME
              </button>
            </li>
            <li>
              <button
                className="w-full text-left p-2 hover:bg-blue-500 rounded"
                onClick={() => setCurrentPage("editProfile")}
              >
                Edit Profile
              </button>
            </li>
            <li>
              <button
                className="w-full text-left p-2 hover:bg-blue-500 rounded"
                onClick={() => setCurrentPage("addJob")}
              >
                Add Job
              </button>
            </li>
            <li>
              <button
                className="w-full text-left p-2 hover:bg-blue-500 rounded"
                onClick={() => setCurrentPage("removeJob")}
              >
                Remove Job
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4">
          <button
            className="w-full bg-blue-900 hover:bg-blue-500 py-2 px-4 rounded"
            onClick={() => setCurrentPage("logout")}
          >
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default EmployerSidebar;
