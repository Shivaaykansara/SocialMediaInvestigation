import React from 'react';
import AiAssistant from './AiAssistant';
import KeywordExtractor from '../components/KeywordExtractor';

const Twitter = () => {
    const Keywords = ['scam', 'urgent', 'fraud', 'contact', 'money'];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Twitter Investigation</h1>
        <p className="mt-4 text-lg text-gray-600">
          Analyze and document Twitter data such as tweets, direct messages, followers, and more.
        </p>
      </header>

      {/* Investigation Actions Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Parse Tweets */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"/><path fill="#fff" fill-rule="nonzero" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"/></svg>             <h2 className="text-2xl font-semibold text-gray-800">Parse Tweets</h2>
          <p className="text-gray-600 mt-2">Retrieve and document all tweets from the account.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Start Parsing
          </button>
        </div>

        {/* Parse Direct Messages */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"/><path fill="#fff" fill-rule="nonzero" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"/></svg>             <h2 className="text-2xl font-semibold text-gray-800">Parse Messages</h2>
          <p className="text-gray-600 mt-2">Retrieve and analyze Twitter direct messages.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Start Parsing
          </button>
        </div>

        {/* Retrieve Followers */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"/><path fill="#fff" fill-rule="nonzero" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"/></svg>             <h2 className="text-2xl font-semibold text-gray-800">Retrieve Followers</h2>
          <p className="text-gray-600 mt-2">Get a complete list of followers from the account.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Retrieve
          </button>
        </div>

        {/* Following */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"/><path fill="#fff" fill-rule="nonzero" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"/></svg>             <h2 className="text-2xl font-semibold text-gray-800">Retrieve Following</h2>
          <p className="text-gray-600 mt-2">Analyze the user's following list on Twitter.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Retrieve
          </button>
        </div>

        {/* Account Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-16 h-16 mb-4" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"/><path fill="#fff" fill-rule="nonzero" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"/></svg>             <h2 className="text-2xl font-semibold text-gray-800">Account Info</h2>
          <p className="text-gray-600 mt-2">Retrieve profile information such as bio, settings, and verification status.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Retrieve
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16">
        {/* Display Keyword Extractor */}
        <KeywordExtractor keywords={Keywords} />
      </div>
      {/* AI Assistant */}
      <AiAssistant />
    </div>
  );
};

export default Twitter;
