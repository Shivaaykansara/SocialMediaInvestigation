import React, { useState } from 'react';

// Sample data for demonstration purposes
const sampleData = [
  { post: 'Urgent: Transfer the money now or face consequences!', keywords: ['urgent', 'transfer', 'money'] },
  { post: 'Fraudulent activity detected in recent transactions.', keywords: ['fraud', 'transactions'] },
  { post: 'Contact us immediately for urgent assistance.', keywords: ['contact', 'urgent'] },
  { post: 'Money transfer required to complete the transaction.', keywords: ['money', 'transfer'] },
];

const KeywordExtractor = ({ keywords, data }) => {
  const [selectedKeyword, setSelectedKeyword] = useState(null);

  // Extract frequency of each keyword
  const keywordFrequency = keywords.reduce((acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {});

  console.log(data)
  // Filter posts that contain the selected keyword
  const filteredPosts = selectedKeyword
    ? data.filter((item) => item.keywords.includes(selectedKeyword))
    : [];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keyword Analysis</h2>
      <p className="text-gray-600 mb-4">
        The following keywords have been identified from recent posts and messages:
      </p>
      
      {/* Keyword Frequency */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Keyword Frequency</h3>
        <ul className="list-disc pl-5 space-y-2">
          {Object.entries(keywordFrequency).map(([keyword, freq]) => (
            <li
              key={keyword}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => setSelectedKeyword(keyword)}
            >
              {keyword} ({freq} times)
            </li>
          ))}
        </ul>
      </div>

      {/* Filtered Posts */}
      {selectedKeyword && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Posts Containing "{selectedKeyword}"</h3>
          <ul className="space-y-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((item, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-800">{item.post}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No posts found containing this keyword.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// Default props for demo
KeywordExtractor.defaultProps = {
  keywords: ['transfer', 'urgent', 'money', 'suspicious', 'fraud'],
  data: sampleData,
};

export default KeywordExtractor;
