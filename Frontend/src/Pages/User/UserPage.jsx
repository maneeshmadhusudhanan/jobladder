import React from 'react';

const UserPage = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-screen flex">
        <div className="bg-blue-100 flex-1">

          <div className="mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg ml-10 mr-10 relative">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
                src="/Frontend/src/Images/Polish_20230516_022418225.jpg"
                alt="User"
              />
              <h2 className="mt-4 text-2xl font-extrabold animate-bounce">USER NAME</h2>
              <p className="text-blue-600 font-semibold">Job Seeker, JOB LADDER</p>
            </div>

            <div className="mt-8 ml-10 mr-10">
              <h3 className="text-lg font-extrabold mb-4 border-b-2 border-blue-300 pb-2">
                ACCOUNT INFORMATION
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <p className="font-semibold">
                  Email: <span className="font-normal">user@example.com</span>
                </p>
                <p className="font-semibold">
                  Phone: <span className="font-normal">+918281422036</span>
                </p>
                <p className="font-semibold">
                  Location: <span className="font-normal">Technopark</span>
                </p>
                <p className="font-semibold">
                  Role: <span className="font-normal">User</span>
                </p>
                <p className="font-semibold">
                  Qualification: <span className="font-normal">Bachelor's in IT</span>
                </p>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <a
                href="/Frontend/Pages/UserEditProfile.html"
                className="bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold py-3 px-6 rounded-full hover:bg-gradient-to-l hover:from-blue-900 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer animate-pulse"
              >
                EDIT PROFILE
              </a>
            </div>

            {/* Applied and Saved Jobs */}
            <div className="mt-10 flex flex-wrap justify-center gap-10">
              <div>
                <h3 className="font-extrabold text-blue-600 text-2xl mb-4">APPLIED JOBS</h3>
                <a
                  href="/Frontend/Pages/NotificationPage2.html"
                  className="bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold py-3 px-6 rounded-full hover:bg-gradient-to-l hover:from-blue-900 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer animate-pulse"
                >
                  VIEW APPLIED JOBS
                </a>
              </div>
              <div>
                <h3 className="font-extrabold text-green-600 text-2xl mb-4">SAVED JOBS</h3>
                <a
                  href="/Frontend/Pages/SavedJobsPage.html"
                  className="bg-gradient-to-r from-green-600 to-green-900 text-white font-bold py-3 px-6 rounded-full hover:bg-gradient-to-l hover:from-green-900 hover:to-green-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer animate-pulse"
                >
                  VIEW SAVED JOBS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
