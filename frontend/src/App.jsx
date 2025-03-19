'use client'

import Sidebar from "./Components/Sidebar.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router";
import CampaignPage from "./components/CampaignPage.jsx";
import ActiveCampaignsDashboard from "./Components/ActiveCampaignsDashboard.jsx";
import HomeDashboard from "./Components/HomeDashboard.jsx";
import AnalyticsCard from "./Components/AnalyticsCard.jsx";


export default function Home() {
    const [selected, setSelected] = useState("Home");

    let testCampaigns = [{description: "Modern AI calorie tracking app",imageLink: "https://picsum.photos/220/300", name: "CalorieOne", payout:"0.05"}, {description: "Track your food intake on one app", imageLink: "https://picsum.photos/220/300", name: "FoodCheck", payout: "0.04"}]

  return (
    <div className="h-screen w-screen flex items-center">
      <Sidebar selected={selected} setSelected={setSelected} />
        <Routes>
            <Route path="/Home" setSelected={setSelected} element=<HomeDashboard campaigns={testCampaigns} /> />
            <Route path="/Analytics" element=<AnalyticsCard/> />
            <Route path="/Campaigns" setSelected={setSelected} element=<ActiveCampaignsDashboard/> />
            <Route path="/Campaigns/:campaignID" element=<CampaignPage/> />
        </Routes>
    </div>
  );
}
