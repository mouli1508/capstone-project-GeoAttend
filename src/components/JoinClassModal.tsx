import React from 'react';

interface JoinClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinClassModal: React.FC<JoinClassModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;  // Do not render if modal is not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[90%] sm:w-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4">Join class</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Class code</label>
          <input
            type="text"
            placeholder="Class code"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <p className="mt-2 text-sm text-gray-500">Ask your teacher for the class code, then enter it here.</p>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          <p>To sign in with a class code:</p>
          <ul className="list-disc list-inside">
            <li>Use an authorized account</li>
            <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
          </ul>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button className="text-gray-600 hover:underline" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Join</button>
        </div>
      </div>
    </div>
  );
};

export default JoinClassModal;