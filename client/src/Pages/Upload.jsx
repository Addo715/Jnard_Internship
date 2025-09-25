import React from 'react'
import UploadSection from '../Components/UploadSection'
import Button from '../Components/Button';

    

const Upload = () => {
  return (
    function UploadSection() {

      const [files, setFiles] = useState([]);
    
      function handleFiles(e) {
        const newFiles = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...newFiles]);
      }
    
      function handleDrop(e) {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...newFiles]);
      }
    
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-semibold mb-4">Uploads</h2>

    {/* Drag & Drop Box */}
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500"
    >
      <p className="text-gray-600 mb-4">Drag and drop your files here</p>
      <label className="inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-500">
        Upload Files
        <input
          type="file"
          multiple
          className="hidden"
          onChange={handleFiles}
        />
      </label>
    </div>

    {/* List of Selected Files */}
    {files.length > 0 && (
      <div className="mt-6">
        <h3 className="font-medium mb-2">Selected Files:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Navigation Buttons */}
    <div className="flex justify-between mt-6">
      <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
        Back
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500">
        Next
      </button>
    </div>
  </div>

  {/* Right section: Why join internship */}
  <div className="w-1/2 bg-blue-500 text-white flex flex-col justify-center rounded-lg p-6">
  <h2 className="text-xl font-bold mb-4">Why Join Our Internship?</h2>
  <ul className="list-disc pl-5 space-y-2">
    <li>Gain valuable hands-on experience</li>
    <li>Learn from experienced mentors</li>
    <li>Build your professional network</li>
  </ul>
</div>
  
  }
    
  );
};

export default Upload