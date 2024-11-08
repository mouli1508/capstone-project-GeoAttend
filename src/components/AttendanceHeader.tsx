// components/AttendanceHeader.tsx
const AttendanceHeader = ({ courseTitle }: { courseTitle: string }) => (
    <div className="text-center py-2 border-b">
      <h2 className="text-xl font-semibold">{courseTitle}</h2>
      <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">+ Mark Attendance</button>
    </div>
  );
  
  export default AttendanceHeader;
  