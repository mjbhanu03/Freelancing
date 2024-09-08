import React, { useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsBriefcase, BsFillCalendarCheckFill } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Workera</h1>
          <nav>
            <ul className="space-y-2">
              <li>
                <SidebarButton
                  label="Dashboard"
                  icon={AiOutlineDashboard}
                  isActive={activeTab === "dashboard"}
                  onClick={() => setActiveTab("dashboard")}
                />
              </li>
              <li>
                <SidebarButton
                  label="Profile"
                  icon={AiOutlineUser}
                  isActive={activeTab === "profile"}
                  onClick={() => setActiveTab("profile")}
                />
              </li>
              <li>
                <SidebarButton
                  label="Jobs"
                  icon={BsBriefcase}
                  isActive={activeTab === "jobs"}
                  onClick={() => setActiveTab("jobs")}
                />
              </li>
              <li>
                <SidebarButton
                  label="Messages"
                  icon={HiOutlineChat}
                  isActive={activeTab === "messages"}
                  onClick={() => setActiveTab("messages")}
                />
              </li>
              <li>
                <SidebarButton
                  label="Calendar"
                  icon={BsFillCalendarCheckFill}
                  isActive={activeTab === "calendar"}
                  onClick={() => setActiveTab("calendar")}
                />
              </li>
              <li>
                <SidebarButton
                  label="Reports"
                  icon={AiOutlineFileText}
                  isActive={activeTab === "reports"}
                  onClick={() => setActiveTab("reports")}
                />
              </li>
              <li>
                <SidebarButton
                  label="Settings"
                  icon={AiOutlineSetting}
                  isActive={activeTab === "settings"}
                  onClick={() => setActiveTab("settings")}
                />
              </li>
              <li>
                <SidebarButton
                  label="Logout"
                  icon={AiOutlineLogout}
                  isActive={activeTab === "logout"}
                  onClick={() => setActiveTab("logout")}
                />
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to your Dashboard
          </h2>
          {activeTab === "dashboard" && <div>Dashboard Content</div>}
          {activeTab === "profile" && <div>Profile Content</div>}
          {activeTab === "jobs" && <div>Jobs Content</div>}
          {activeTab === "messages" && <div>Messages Content</div>}
          {activeTab === "calendar" && <div>Calendar Content</div>}
          {activeTab === "reports" && <div>Reports Content</div>}
          {activeTab === "settings" && <div>Settings Content</div>}
          {activeTab === "logout" && <div>Logout Content</div>}
        </div>
      </main>
    </div>
  );
};

const SidebarButton = ({ label, icon: Icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-lg ${
        isActive ? "bg-gray-100 font-semibold" : ""
      }`}
    >
      <Icon className="h-6 w-6 mr-3" />
      {label}
    </button>
  );
};

export default Dashboard;
