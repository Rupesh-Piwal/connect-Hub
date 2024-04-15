import React, { useState } from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 ${
        isActive ? "bg-blue-500 text-white" : "text-blue-500"
      } border border-blue-500 rounded-t-lg focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabPanel = ({ children, isActive }) => {
  return isActive ? <div className="p-4">{children}</div> : null;
};

const TabGroup = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex border-b border-blue-500">
        <Tab
          label={tab1Label}
          isActive={activeTab === 0}
          onClick={() => handleClick(0)}
        />
        <Tab
          label={tab2Label}
          isActive={activeTab === 1}
          onClick={() => handleClick(1)}
        />
      </div>
      <div>
        <TabPanel isActive={activeTab === 0}>{tab1Content}</TabPanel>
        <TabPanel isActive={activeTab === 1}>{tab2Content}</TabPanel>
      </div>
    </div>
  );
};

export { Tab, TabPanel, TabGroup };
