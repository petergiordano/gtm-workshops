import React, { useState } from 'react';
import { Trash2, PlusCircle, Globe, Users, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

// Define custom colors based on the Overdrive Branding Guidelines
const colors = {
  'primary-orange': '#FF9000',
  'text-heading': '#434343',
  'text-muted': '#8a8a8a',
  'bg-gray-1': '#666666',
  'bg-gray-2': '#8A8A8A',
  'accent-yellow': '#F1C232',
  'accent-light-yellow': '#FFE599',
  'accent-blue': '#55BFFA',
  'accent-muted-blue': '#6E9FBA',
  'accent-muted-brown': '#A58E6F',
  'white': '#FFFFFF', // Explicitly define white for clarity
};

// Main App component
const App = () => {
  // State to manage the current active activity (1, 2, or 3)
  const [currentActivity, setCurrentActivity] = useState(1);

  const [journeyStages, setJourneyStages] = useState([
    {
      id: 'awareness',
      name: 'Awareness',
      description: 'The buyer is experiencing a problem or opportunity.',
      behaviors: '',
      channels: '', // New field for channels buyer uses
      needs: '',
    },
    {
      id: 'consideration',
      name: 'Consideration',
      description: 'The buyer is defining their problem and researching solutions.',
      behaviors: '',
      channels: '', // New field for channels buyer uses
      needs: '',
    },
    {
      id: 'decision',
      name: 'Decision',
      description: 'The buyer is evaluating specific vendors and building a business case.',
      behaviors: '',
      channels: '', // New field for channels buyer uses
      needs: '',
    },
  ]);

  const [channelHypotheses, setChannelHypotheses] = useState([
    { id: 1, channelType: '', channelName: '', rationale: '', metric: '' },
    { id: 2, channelType: '', channelName: '', rationale: '', metric: '' },
    { id: 3, channelType: '', channelName: '', rationale: '', metric: '' },
  ]);

  const handleJourneyChange = (id, field, value) => {
    setJourneyStages((prev) =>
      prev.map((stage) => (stage.id === id ? { ...stage, [field]: value } : stage))
    );
  };

  const handleChannelChange = (id, field, value) => {
    setChannelHypotheses((prev) =>
      prev.map((channel) => (channel.id === id ? { ...channel, [field]: value } : channel))
    );
  };

  const addChannel = () => {
    setChannelHypotheses((prev) => [
      ...prev,
      { id: prev.length ? Math.max(...prev.map(c => c.id)) + 1 : 1, channelType: '', channelName: '', rationale: '', metric: '' },
    ]);
  };

  const removeChannel = (id) => {
    setChannelHypotheses((prev) => prev.filter((channel) => channel.id !== id));
  };

  // Navigation handlers
  const goToNextActivity = () => {
    setCurrentActivity((prev) => Math.min(prev + 1, 3)); // Max activity is 3
  };

  const goToPreviousActivity = () => {
    setCurrentActivity((prev) => Math.max(prev - 1, 1)); // Min activity is 1
  };

  return (
    // Main container with background and font styling
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: colors['white'], fontFamily: 'Open Sans, Raleway, sans-serif' /* Add Google Fonts link for Raleway/Open Sans in parent HTML */ }}>
      <style>{`
        /* Custom Tailwind-like colors for direct use */
        .text-heading { color: ${colors['text-heading']}; }
        .text-muted { color: ${colors['text-muted']}; }
        .bg-primary-orange { background-color: ${colors['primary-orange']}; }
        .hover-bg-primary-orange-dark:hover { background-color: #E68100; /* Slightly darker orange */ }
        .border-accent-blue { border-color: ${colors['accent-blue']}; }
        .text-accent-blue { color: ${colors['accent-blue']}; }
        .focus-ring-accent-blue:focus { --tw-ring-color: ${colors['accent-blue']}; }
        .text-primary-orange { color: ${colors['primary-orange']}; }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-heading leading-tight tracking-tight mb-2">
            GTM Channel Strategy & Buyer Journey Map
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Design your go-to-market channels by deeply understanding your buyer's needs and purchasing journey.
          </p>
        </header>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8 px-4">
          <button
            onClick={goToPreviousActivity}
            disabled={currentActivity === 1}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentActivity === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-100 text-heading hover:bg-gray-200'
            }`}
          >
            <ArrowLeftCircle className="mr-2" size={20} /> Previous
          </button>
          <span className="text-xl font-semibold text-heading">
            Activity {currentActivity} of 3
          </span>
          <button
            onClick={goToNextActivity}
            disabled={currentActivity === 3}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentActivity === 3
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-primary-orange text-white hover-bg-primary-orange-dark'
            }`}
          >
            Next <ArrowRightCircle className="ml-2" size={20} />
          </button>
        </div>

        {/* Activity 1: Buyer Journey Map Section */}
        {currentActivity === 1 && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-12 border-t-8 border-accent-blue">
            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4 flex items-center">
              <Globe className="mr-3 text-accent-blue" size={32} />
              1. Buyer Journey Map
            </h2>
            <p className="text-muted mb-8">
              Outline the key stages of your target buyer's decision-making process. What are they doing, what channels do they use, and what information do they need at each step?
            </p>

            {/* Buyer Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {journeyStages.map((stage) => (
                <div key={stage.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-primary-orange mb-2">{stage.name}</h3>
                  <p className="text-sm text-muted mb-4">{stage.description}</p>
                  <div className="mb-4">
                    <label htmlFor={`behaviors-${stage.id}`} className="block text-sm font-medium text-heading mb-1">
                      Buyer Behaviors
                    </label>
                    <textarea
                      id={`behaviors-${stage.id}`}
                      value={stage.behaviors}
                      onChange={(e) => handleJourneyChange(stage.id, 'behaviors', e.target.value)}
                      placeholder="e.g., Searching on Google, asking peers for recommendations..."
                      rows="2"
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus-ring-accent-blue transition-colors"
                      style={{ color: colors['text-heading'] }}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`channels-${stage.id}`} className="block text-sm font-medium text-heading mb-1">
                      Channels Buyer Uses (ICP Preference)
                    </label>
                    <textarea
                      id={`channels-${stage.id}`}
                      value={stage.channels}
                      onChange={(e) => handleJourneyChange(stage.id, 'channels', e.target.value)}
                      placeholder="e.g., Google Search, LinkedIn, Industry Conferences, Word-of-Mouth"
                      rows="2"
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus-ring-accent-blue transition-colors"
                      style={{ color: colors['text-heading'] }}
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor={`needs-${stage.id}`} className="block text-sm font-medium text-heading mb-1">
                      Information Needs
                    </label>
                    <textarea
                      id={`needs-${stage.id}`}
                      value={stage.needs}
                      onChange={(e) => handleJourneyChange(stage.id, 'needs', e.target.value)}
                      placeholder="e.g., 'How much does it cost?', 'What is the ROI?', 'Which vendors are best?'"
                      rows="2"
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus-ring-accent-blue transition-colors"
                      style={{ color: colors['text-heading'] }}
                    ></textarea>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity 2 & 3: Channel Hypothesis Section */}
        {(currentActivity === 2 || currentActivity === 3) && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-t-8" style={{ borderColor: colors['primary-orange'] }}>
            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4 flex items-center">
              <Users className="mr-3 text-primary-orange" size={32} />
              2. GTM Channel Hypothesis Matrix
            </h2>
            <p className="text-muted mb-8">
              {currentActivity === 2
                ? "Based on your buyer's journey, hypothesize and prioritize your core channels and explain their rationale. You'll define metrics in the next step."
                : "Now, define a key metric for each channel to measure its success. Refine your entire strategy."}
            </p>

            {/* Channel Matrix */}
            <div className="overflow-x-auto">
              <div className="w-full table-auto border-collapse">
                {/* Table Header */}
                <div className="bg-gray-100 rounded-t-xl grid grid-cols-1 md:grid-cols-5 gap-2 p-4 text-sm font-semibold text-muted uppercase tracking-wider">
                  <div className="col-span-1 hidden md:block">Channel Type</div>
                  <div className="col-span-1 hidden md:block">Proposed Channel</div>
                  <div className="col-span-2 hidden md:block">Channel Rationale (Leverage Product & Meet Buyer)</div>
                  <div className="col-span-1 hidden md:block">Key Metric</div>
                  <div className="hidden md:block"></div>
                </div>
                
                {/* Table Rows */}
                {channelHypotheses.map((channel, index) => (
                  <div key={channel.id} className={`grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 items-center p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    {/* Channel Type */}
                    <div className="col-span-1 flex flex-col md:block">
                      <label className="text-xs font-semibold text-muted md:hidden mb-1">Type</label>
                      <select
                        value={channel.channelType}
                        onChange={(e) => handleChannelChange(channel.id, 'channelType', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus-ring-accent-blue transition-colors"
                        style={{ color: colors['text-heading'] }}
                        disabled={currentActivity === 1} // Disable during Activity 1
                      >
                        <option value="">Select</option>
                        <option value="Direct">Direct</option>
                        <option value="Partner">Partner</option>
                      </select>
                    </div>
                    
                    {/* Proposed Channel */}
                    <div className="col-span-1 flex flex-col md:block">
                      <label className="text-xs font-semibold text-muted md:hidden mb-1">Channel</label>
                      <input
                        type="text"
                        value={channel.channelName}
                        onChange={(e) => handleChannelChange(channel.id, 'channelName', e.target.value)}
                        placeholder="e.g., Content Marketing, Direct Sales"
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus-ring-accent-blue transition-colors"
                        style={{ color: colors['text-heading'] }}
                        disabled={currentActivity === 1} // Disable during Activity 1
                      />
                    </div>

                    {/* Channel Rationale */}
                    <div className="col-span-2 flex flex-col md:block">
                      <label className="text-xs font-semibold text-muted md:hidden mb-1">Rationale</label>
                      <textarea
                        value={channel.rationale}
                        onChange={(e) => handleChannelChange(channel.id, 'rationale', e.target.value)}
                        placeholder="Explain how this channel leverages a unique product capability to meet the buyer's needs and aligns with their preferred channels."
                        rows="2"
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus-ring-accent-blue transition-colors"
                        style={{ color: colors['text-heading'] }}
                        disabled={currentActivity === 1} // Disable during Activity 1
                      ></textarea>
                    </div>

                    {/* Key Metric */}
                    <div className="col-span-1 flex flex-col md:block">
                      <label className="text-xs font-semibold text-muted md:hidden mb-1">Key Metric</label>
                      <input
                        type="text"
                        value={channel.metric}
                        onChange={(e) => handleChannelChange(channel.id, 'metric', e.target.value)}
                        placeholder="e.g., Qualified Leads from Content, Partner-sourced ARR"
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus-ring-accent-blue transition-colors"
                        style={{ color: colors['text-heading'] }}
                        disabled={currentActivity < 3} // Only enabled for Activity 3
                      />
                    </div>
                    
                    {/* Remove Button */}
                    <div className="col-span-1 flex justify-end items-center">
                      <button
                        onClick={() => removeChannel(channel.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Remove Channel"
                        disabled={currentActivity === 1} // Disable during Activity 1
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Add Channel Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={addChannel}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-orange hover-bg-primary-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-accent-blue transition-colors"
                disabled={currentActivity === 1} // Disable during Activity 1
              >
                <PlusCircle className="mr-2" size={20} />
                Add Channel Hypothesis
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
