import React from 'react';

interface CreateClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateClassModal: React.FC<CreateClassModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;  // Do not render if modal is not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[90%] sm:w-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4">Create a New Class</h2>
        
        {/* Course Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Course Name</label>
          <input
            type="text"
            placeholder="Enter the course name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Course Number Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Course Number</label>
          <input
            type="text"
            placeholder="Enter the course number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Description (Optional) */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Description (Optional)</label>
          <textarea
            placeholder="Enter a brief description"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            rows={3}
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="text-gray-600 hover:underline" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateClassModal;
