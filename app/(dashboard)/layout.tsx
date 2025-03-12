"use client";
import { useState } from "react";
import Navbar from "./(comp)/navbar";
import Sidebar from "./(comp)/sidebar";
import Dashboard from "./(comp)/dashboard";
import Footer from "./(comp)/footer";
import EngineeringNewsFeed from "./(comp)/newfeed";

export default function RootLayout() {
  const [activeButton, setActiveButton] = useState("Dashboard");

  // Define content for each button
  const renderContent = () => {
    switch (activeButton) {
      case "Dashboard":
        return <Dashboard />;
      case "Courses":
        return <h1 className="text-3xl font-bold">Courses Section</h1>;
      case "Study Lists":
        return <h1 className="text-3xl font-bold">Study Lists Section</h1>;
      case "Newsfeed":
        return <EngineeringNewsFeed />;
      case "Chat":
        return <h1 className="text-3xl font-bold">Chat with your Friends</h1>;
      case "Groups":
        return <h1 className="text-3xl font-bold">Your Groups</h1>;
      case "Career Corner":
        return <h1 className="text-3xl font-bold">Career Opportunities</h1>;
      default:
        return <h1 className="text-3xl font-bold">Welcome!</h1>;
    }
  };

  return (
    <div className="flex w-[100vw]">
      <div>
        <Sidebar setActiveButton={setActiveButton} />
      </div>
      {/* Main Content */}
      <div className="flex-1 h-screen flex flex-col">
        <div>
          <Navbar />
        </div>
        <main className="flex flex-1 ml-[256px] pt-15 ">
          <div className="bg-gray-50 pl-256px p-6 rounded-lg  w-full  ">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
