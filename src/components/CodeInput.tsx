// components/CodeInput.tsx
const CodeInput = ({
    code,
    setCode,
    onSubmit,
  }: {
    code: string;
    setCode: (code: string) => void;
    onSubmit: () => void;
  }) => (
    <div className="my-4 p-4 border rounded">
      <label htmlFor="attendance-code" className="block text-sm font-medium text-gray-700">
        Enter the code
      </label>
      <input
        id="attendance-code"
        type="text"
        placeholder="Enter the code..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full mt-1 p-2 border rounded"
      />
      <button
        onClick={onSubmit}
        className="w-full mt-3 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
      >
        Submit
      </button>
    </div>
  );
  
  export default CodeInput;
  