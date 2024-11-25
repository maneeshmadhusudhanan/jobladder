
import React, { useState } from "react";

const EmployerList = () => {
  // Mock data for demonstration purposes
  const [employers, setEmployers] = useState([
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      email: "john.doe@example.com",
      mobile: "9876543210",
      about: "Experienced in full-stack development and team management.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager",
      email: "jane.smith@example.com",
      mobile: "9876543211",
      about: "Expert in Agile methodologies and project delivery.",
    },
    {
      id: 3,
      name: "Mark Lee",
      position: "UI/UX Designer",
      email: "mark.lee@example.com",
      mobile: "9876543212",
      about: "Creative designer with a focus on user experience.",
    },
  ]);

  // Handle Edit action
  const handleEdit = (id) => {
    const employerToEdit = employers.find((employer) => employer.id === id);
    alert(`Editing employer: ${employerToEdit.name}`);
  };

  // Handle Delete action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employer?")) {
      const updatedEmployers = employers.filter((employer) => employer.id !== id);
      setEmployers(updatedEmployers);
      alert("Employer deleted successfully.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl rounded-xl p-8 w-full lg:w-3/4 animate-fadeIn transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300">
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Employer List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-blue-300 rounded-lg">
            <thead>
              <tr className="bg-blue-500">
                <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-white">
                  Name
                </th>
                <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-white">
                  Job Position
                </th>
                <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-white">
                  Email
                </th>
                <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-white">
                  Mobile
                </th>
                <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-white">
                  About
                </th>
                <th className="px-6 py-3 border border-blue-300 text-center font-semibold text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employers.map((employer) => (
                <tr
                  key={employer.id}
                  className="even:bg-blue-100 odd:bg-white hover:bg-blue-200 transition"
                >
                  <td className="px-6 py-4 border border-blue-300">
                    {employer.name}
                  </td>
                  <td className="px-6 py-4 border border-blue-300">
                    {employer.position}
                  </td>
                  <td className="px-6 py-4 border border-blue-300">
                    {employer.email}
                  </td>
                  <td className="px-6 py-4 border border-blue-300">
                    {employer.mobile}
                  </td>
                  <td className="px-6 py-4 border border-blue-300">
                    {employer.about}
                  </td>
                  <td className="px-6 py-4 border border-blue-300 text-center space-x-4">
                    <button
                      onClick={() => handleEdit(employer.id)}
                      className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-500 transition transform hover:scale-105"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(employer.id)}
                      className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-500 transition transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployerList;


// import React, { useState } from "react";

// const EmployerList = () => {
//   // Mock data for demonstration purposes
//   const [employers, setEmployers] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       position: "Software Engineer",
//       email: "john.doe@example.com",
//       mobile: "9876543210",
//       about: "Experienced in full-stack development and team management.",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       position: "Project Manager",
//       email: "jane.smith@example.com",
//       mobile: "9876543211",
//       about: "Expert in Agile methodologies and project delivery.",
//     },
//     {
//       id: 3,
//       name: "Mark Lee",
//       position: "UI/UX Designer",
//       email: "mark.lee@example.com",
//       mobile: "9876543212",
//       about: "Creative designer with a focus on user experience.",
//     },
//   ]);

//   // Handle Edit action
//   const handleEdit = (id) => {
//     const employerToEdit = employers.find((employer) => employer.id === id);
//     alert(`Editing employer: ${employerToEdit.name}`);
//     // Logic to open a modal or navigate to an edit page can go here.
//   };

//   // Handle Delete action
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this employer?")) {
//       const updatedEmployers = employers.filter((employer) => employer.id !== id);
//       setEmployers(updatedEmployers);
//       alert("Employer deleted successfully.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
//         Employer List
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-blue-300">
//           <thead>
//             <tr className="bg-blue-100">
//               <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-blue-700">
//                 Name
//               </th>
//               <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-blue-700">
//                 Job Position
//               </th>
//               <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-blue-700">
//                 Email
//               </th>
//               <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-blue-700">
//                 Mobile
//               </th>
//               <th className="px-6 py-3 border border-blue-300 text-left font-semibold text-blue-700">
//                 About
//               </th>
//               <th className="px-6 py-3 border border-blue-300 text-center font-semibold text-blue-700">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {employers.map((employer) => (
//               <tr
//                 key={employer.id}
//                 className="even:bg-blue-50 odd:bg-white hover:bg-blue-200 transition"
//               >
//                 <td className="px-6 py-4 border border-blue-300">
//                   {employer.name}
//                 </td>
//                 <td className="px-6 py-4 border border-blue-300">
//                   {employer.position}
//                 </td>
//                 <td className="px-6 py-4 border border-blue-300">
//                   {employer.email}
//                 </td>
//                 <td className="px-6 py-4 border border-blue-300">
//                   {employer.mobile}
//                 </td>
//                 <td className="px-6 py-4 border border-blue-300">
//                   {employer.about}
//                 </td>
//                 <td className="px-6 py-4 border border-blue-300 text-center space-x-4">
//                   {/* Edit Button */}
//                   <button
//                     onClick={() => handleEdit(employer.id)}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
//                   >
//                     Edit
//                   </button>
//                   {/* Delete Button */}
//                   <button
//                     onClick={() => handleDelete(employer.id)}
//                     className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployerList;
