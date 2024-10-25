import React from 'react';

interface NewChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewChatModal: React.FC<NewChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[90%] sm:w-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4">Start a New Chat</h2>

        {/* Input for searching a new person */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Search for a person</label>
          <input
            type="text"
            placeholder="Enter name or email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button className="text-gray-600 hover:underline" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;
