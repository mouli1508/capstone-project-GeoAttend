
// import Image from "next/image";

// const UserCard = ({ type }: { type: string }) => {
//   return (
//     <div className="rounded-2xl shadow-xl p-6 flex-1 min-w-[150px] max-w-xs bg-gradient-to-r from-blue-100 to-purple-200 hover:from-purple-200 hover:to-blue-200 transform transition-all duration-300 hover:scale-105">
//       <div className="flex justify-between items-center">
//         <span className="text-[10px] bg-white px-3 py-1 rounded-full text-green-600 shadow-md">
//           course number
//         </span>
//         <Image src="/more.png" alt="" width={20} height={20} />
//       </div>
//       <h1 className="text-xl font-semibold my-4 text-gray-700">{type}</h1>
//     </div>
//   );
// };

// export default UserCard;

import Image from "next/image";

const UserCard = ({ type, courseNumber }: { type: string; courseNumber: string }) => {
  return (
    <div className="rounded-2xl shadow-xl p-6 flex-1 min-w-[150px] max-w-xs bg-gradient-to-r from-blue-100 to-purple-200 hover:from-purple-200 hover:to-blue-200 transform transition-all duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-3 py-1 rounded-full text-green-600">
          {courseNumber}
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-xl font-semibold my-4 text-gray-700">{type}</h1>
    </div>
  );
};

export default UserCard;

