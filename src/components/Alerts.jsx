import React, { useState } from 'react';

const Alerts = () => {
  const [alertKeyword, setAlertKeyword] = useState('');
  const [alerts, setAlerts] = useState([]);

  const addAlert = () => {
    setAlerts([...alerts, alertKeyword]);
    setAlertKeyword('');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Alerts</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter keyword for alert"
          value={alertKeyword}
          onChange={(e) => setAlertKeyword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addAlert}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
        >
          Add Alert
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Active Alerts</h3>
        <ul className="list-disc pl-5 space-y-2">
          {alerts.length > 0 ? (
            alerts.map((alert, index) => (
              <li key={index} className="text-blue-600">{alert}</li>
            ))
          ) : (
            <p className="text-gray-500">No active alerts.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Alerts;
