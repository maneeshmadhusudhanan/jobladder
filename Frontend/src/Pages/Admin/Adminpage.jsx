
import React, { useState } from "react";
import Footer1 from "../../Components/Footer1";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminProfileUpdate from "./EditAdmin";
import AddEmployer from "./AddEmployer";
import EmployerList from "./EmployersList";

const Adminpage = () => {
  const [currentPage, setCurrentPage] = useState("adminProfile");

  const renderContent = () => {
    switch (currentPage) {
      case "editAdmin":
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
            <AdminProfileUpdate />
          </div>
        );
      case "addEmployer":
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
            <AddEmployer />
          </div>
        );
      case "removeEmployer":
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
            <EmployerList />
          </div>
        );
      default:
        return (
          <div className="bg-gradient-to-r from-blue-200 to-blue-300 shadow-lg rounded-xl p-6 mt-4">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md"
                src="/Frontend/src/Images/Polish_20230516_022418225.jpg"
                alt="Admin"
              />
              <h2 className="mt-4 text-3xl font-bold text-blue-700 animate-pulse">
                ADMIN MANEESH
              </h2>
              <p className="text-blue-600 font-semibold">Admin, JOB LADDER</p>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                ACCOUNT INFORMATION
              </h3>
              <div className="grid grid-cols-2 gap-6 text-gray-700 font-medium">
                <p>Email: maneeshroks@gmail.com</p>
                <p>Phone: +918281422036</p>
                <p>Location: Technopark</p>
                <p>Role: Admin</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
        {/* Sidebar */}
        <AdminSidebar setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <header className="bg-blue-700 text-white py-6 rounded-xl shadow-md mb-6">
            <nav className="flex justify-between items-center mx-auto px-6">
              <h1 className="text-4xl font-bold animate-pulse">
                ADMIN PROFILE
              </h1>
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    href="/Frontend/Pages/EmployerProfile.html"
                    className="text-lg font-semibold hover:text-blue-300"
                  >
                    EMPLOYER PROFILE
                  </a>
                </li>
                <li>
                  <a
                    href="/Frontend/src/Components/Index.jsx"
                    className="text-lg font-semibold hover:text-blue-300"
                  >
                    LOGOUT
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <Footer1 />
    </>
  );
};

export default Adminpage;




// import React, { useState } from "react";
// import Footer1 from "../../Components/Footer1";
// import AdminSidebar from "../../Components/admin/AdminSidebar";
// import AdminProfileUpdate from "./EditAdmin";
// import AddEmployer from "./AddEmployer";
// import EmployerList from "./EmployersList";



// const Adminpage = () => {
//   const [currentPage, setCurrentPage] = useState("adminProfile");

//   const renderContent = () => {
//     switch (currentPage) {
//       case "editAdmin":
//         return <h2><AdminProfileUpdate/></h2>;
//       case "addEmployer":
//         return <h2><AddEmployer/></h2>;
//       case "removeEmployer":
//         return <h2><EmployerList/></h2>;
//       default:
//         return (
//           <div>
//             <div className="text-center">
//               <img
//                 className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
//                 src="/Frontend/src/Images/Polish_20230516_022418225.jpg"
//                 alt="Admin"
//               />
//               <h2 className="mt-4 text-2xl font-bold animate-bounce">
//                 ADMIN MANEESH
//               </h2>
//               <p className="text-blue-600">Admin, JOB LADDER</p>
//             </div>
//             <div className="mt-10 ml-10 mr-10">
//               <h3 className="text-lg font-semibold mb-2">
//                 ACCOUNT INFORMATION
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <p>Email: maneeshroks@gmail.com</p>
//                 <p>Phone: +918281422036</p>
//                 <p>Location: Technopark</p>
//                 <p>Role: Admin</p>
//               </div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <>
//       <div className="flex bg-blue-100">
//         {/* Sidebar */}
//         <AdminSidebar setCurrentPage={setCurrentPage} />

//         {/* Main Content */}
//         <div className="flex-1 p-5">
//           <header className="bg-blue-600 text-white py-6">
//             <nav className="mx-auto flex justify-between items-center">
//               <h1 className="text-4xl font-bold animate-bounce ml-10">
//                 ADMIN PROFILE
//               </h1>
//               <ul className="flex items-center gap-8 mr-10">
//                 <li>
//                   <a
//                     href="/Frontend/Pages/EmployerProfile.html"
//                     className="hover:text-blue-300 text-2xl font-bold"
//                   >
//                     EMPLOYER PROFILE
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/Frontend/src/Components/Index.jsx" className="hover:text-blue-300 text-2xl font-bold">
//                     LOGOUT
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </header>
//           {renderContent()}
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer1 />
//     </>
//   );
// };

// export default Adminpage;
