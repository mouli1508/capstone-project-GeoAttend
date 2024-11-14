// 'use client';

// import React, { useState } from 'react';
// import EventCalendar from "@/components/EventCalendar";
// import UserCard from "@/components/UserCard";
// import FancyButton from "@/components/FancyButton";  // Import the button component
// import JoinClassModal from "@/components/JoinClassModal";
// import Link from 'next/link';

// const StudentsPage = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   // Function to open the modal
//   const openModal = () => {
//     setModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   // Define course data
//   const courses = [
//     { id: 'CS101', name: 'Capstone Project' },
//     { id: 'DM202', name: 'Human Robot Interaction' },
//     { id: 'PM303', name: 'Advance Artificial Intelligence' }
//   ];

//   return (
//     <div className="p-4 flex gap-4 flex-col md:flex-row">
//       {/* LEFT */}
//       <div className="w-full lg:w-2/3 flex flex-col gap-8">
//         {/* JOIN NEW CLASS BUTTON */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Classes</h2>
//           <FancyButton label="+ Join New Class" onClick={openModal} />
//         </div>

//         {/* USER CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           {courses.map((course) => (
//             <Link key={course.id} href="/students/list/attendance">
//               <div className="cursor-pointer">
//                 <UserCard type={course.name} courseNumber={course.id} />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="w-full lg:w-1/3 flex flex-col gap-8">
//         <EventCalendar />
//       </div>

//       {/* Join Class Modal */}
//       <JoinClassModal isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// };

// export default StudentsPage;

'use client';

import React, { useState } from 'react';
import UserCard from "@/components/UserCard";
import FancyButton from "@/components/FancyButton";  // Import the button component
import JoinClassModal from "@/components/JoinClassModal";
import Link from 'next/link';

const StudentsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Define course data
  const courses = [
    { id: 'CS101', name: 'Capstone Project' },
    { id: 'DM202', name: 'Human Robot Interaction' },
    { id: 'PM303', name: 'Advance Artificial Intelligence' }
  ];

  return (
    <div className="p-4">
      {/* Header with Join New Class Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Classes</h2>
        <FancyButton label="+ Join New Class" onClick={openModal} />
      </div>

      {/* USER CARDS: Full-width grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href="/students/list/attendance">
            <div className="cursor-pointer">
              <UserCard type={course.name} courseNumber={course.id} />
            </div>
          </Link>
        ))}
      </div>

      {/* Join Class Modal */}
      <JoinClassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default StudentsPage;
