import React from 'react';
import AiAssistant from './AiAssistant';
import KeywordExtractor from '../components/KeywordExtractor';
import Alerts from '../components/Alerts';

const Facebook = () => {
    const Keywords = ['scam', 'urgent', 'fraud', 'contact', 'money'];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Facebook Investigation</h1>
        <p className="mt-4 text-lg text-gray-600">Retrieve and document Facebook data like posts, messages, timeline, and more.</p>
      </header>

      {/* Investigation Actions Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Parse Posts */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4"  x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>          <h2 className="text-2xl font-semibold text-gray-800">Parse Posts</h2>
          <p className="text-gray-600 mt-2">Analyze and retrieve all Facebook posts for investigation.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Start Parsing
          </button>
        </div>

        {/* Parse Messages */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4"  x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>          <h2 className="text-2xl font-semibold text-gray-800">Parse Messages</h2>
          <p className="text-gray-600 mt-2">Retrieve Facebook messages for detailed analysis.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Start Parsing
          </button>
        </div>

        {/* Parse Timeline */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4"  x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>          <h2 className="text-2xl font-semibold text-gray-800">Parse Timeline</h2>
          <p className="text-gray-600 mt-2">Investigate the user's Facebook timeline for key events.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Start Parsing
          </button>
        </div>

        {/* Retrieve Friends List */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4"  x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>          <h2 className="text-2xl font-semibold text-gray-800">Retrieve Friends List</h2>
          <p className="text-gray-600 mt-2">Get a complete list of Facebook friends.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Retrieve
          </button>
        </div>

        {/* Followers & Following */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4"  x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>          <h2 className="text-2xl font-semibold text-gray-800">Followers & Following</h2>
          <p className="text-gray-600 mt-2">Examine the user's followers and following list.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Retrieve
          </button>
        </div>

        {/* Account Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4"  x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>          <h2 className="text-2xl font-semibold text-gray-800">Account Info</h2>
          <p className="text-gray-600 mt-2">Retrieve details like email, profile info, and settings.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Retrieve
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16">
        {/* Display Keyword Extractor */}
        <KeywordExtractor keywords={Keywords} />
        <Alerts />
      </div>
      {/* AI Assistant */}
      <AiAssistant />
    </div>
  );
};

export default Facebook;
