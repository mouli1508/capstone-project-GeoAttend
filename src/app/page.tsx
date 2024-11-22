// import Announcements from "@/components/Announcements";
// import AttendanceChart from "@/components/AttendanceChart";
// import CountChart from "@/components/CountChart";
// import EventCalendar from "@/components/EventCalendar";
// import FinanceChart from "@/components/FinanceChart";
// import UserCard from "@/components/UserCard";

// const AdminPage = () => {
//   return (
//     <div className="p-4 flex gap-4 flex-col md:flex-row">
//       {/* LEFT */}
//       <div className="w-full lg:w-2/3 flex flex-col gap-8">
//         {/* USER CARDS */}
//         <div className="flex gap-4 justify-between flex-wrap">
//           {/* <UserCard type="student" />
//           <UserCard type="teacher" />
//           <UserCard type="parent" />
//           <UserCard type="staff" /> */}
//         </div>
//         {/* MIDDLE CHARTS */}
//         <div className="flex gap-4 flex-col lg:flex-row">
//           {/* COUNT CHART */}
//           <div className="w-full lg:w-1/3 h-[450px]">
//             <CountChart />
//           </div>
//           {/* ATTENDANCE CHART */}
//           <div className="w-full lg:w-2/3 h-[450px]">
//             <AttendanceChart />
//           </div>
//         </div>
//         {/* BOTTOM CHART */}
//         <div className="w-full h-[500px]">
//           <FinanceChart />
//         </div>
//       </div>
//       {/* RIGHT */}
//       <div className="w-full lg:w-1/3 flex flex-col gap-8">
//         <EventCalendar />
//         <Announcements/>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

"use client";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect } from "react";
import { redirect } from "next/navigation";


export default function Home() {
  useEffect ( ()=> {
    redirect('/api/auth/login?post_login_redirect_url=/students')
  })
  return (
    <div>
      {/* <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink> */}
    </div>
  )
}