import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Line chart data
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Keyword Frequency',
        data: [10, 15, 20, 25, 30],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        fill: true,
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Category Counts',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Dashboard Overview',
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `Value: ${context.raw}`,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'X-Axis Label',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y-Axis Label',
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 mt-10 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-600">
          An overview of the key metrics and data visualizations.
        </p>
      </header>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keyword Frequency Over Time</h2>
          <Line data={lineData} options={options} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Category Counts</h2>
          <Bar data={barData} options={options} />
        </div>

        {/* Summary Cards */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-gray-700">Total Posts Analyzed:</h3>
              <p className="text-lg text-gray-600">123</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-gray-700">Alerts Triggered:</h3>
              <p className="text-lg text-gray-600">5</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-gray-700">Total Keywords Detected:</h3>
              <p className="text-lg text-gray-600">45</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>New post from user XYZ detected</li>
            <li>Keyword "example" triggered an alert</li>
            <li>User ABC followed you</li>
            <li>Comment on your post by user DEF</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
