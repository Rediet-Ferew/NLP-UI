// ThreatPredictionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ThreatPrediction = () => {
  const [inputText, setInputText] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', { text: inputText });
      setPredictionResult(response.data.result);
    } catch (error) {
      console.error('Error predicting threat:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen mt-24">
      <label className="mb-4 relative w-full">
        <p className="mb-4 ml-24">Enter Text:</p>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          className="w-full h-56 ml-28 border-2 border-purple-600 rounded-md focus:outline-none focus:border-blue-500 p-4 resize-none"
          placeholder="Type your text here"
          style={{ width: '75%' }}
        />
      </label>
      <button
        onClick={handleSubmit}
        className="bg-gradient-to-b from-purple-950 to-purple-600 text-white px-8 py-2 rounded-2xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue my-10 mr-10"
      >
        Go
      </button>

      {predictionResult !== null && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Prediction Result:</h2>
          <p className="mt-2">{predictionResult}</p>
        </div>
      )}
    </div>
  );
};

export default ThreatPrediction;
