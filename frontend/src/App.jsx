'use client'

import Sidebar from "./Components/Sidebar.jsx";
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router";
import SignUp from "./Components/Signup.jsx";
import CampaignPage from "./components/CampaignPage.jsx";
import ActiveCampaignsDashboard from "./Components/ActiveCampaignsDashboard.jsx";
import HomeDashboard from "./Components/HomeDashboard.jsx";
import AnalyticsCard from "./Components/AnalyticsCard.jsx";
import Toast from "./Components/Toast.jsx";
import Login from "./Components/Login.jsx";



const PublicRoutes = () => (
    <Routes>
        {/*
        <Route path="/" element=<LandingPage /> />
        <Route path="/Support" element=<Support /> />
        */}
        <Route path="/Login" element=<Login /> />
        <Route path="/Signup" element=<SignUp /> />
    </Routes>
)

const CreatorRoutes = () => {
    const [selected, setSelected] = useState("Home");
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.clear();
        navigate("/");
    }

    let testCampaigns = [{description: "Modern AI calorie tracking app",imageLink: "https://picsum.photos/220/300", name: "CalorieOne", payout:"0.05"}, {description: "Track your food intake on one app", imageLink: "https://picsum.photos/220/300", name: "FoodCheck", payout: "0.04"}]

    return (

        <div className="flex w-screen bg-primary">
            <Sidebar handleSignOut={handleSignOut} selected={selected} setSelected={setSelected} />
            <Routes>
                <Route path="/Home" setSelected={setSelected} element=<HomeDashboard campaigns={testCampaigns} /> />
                <Route path="/Analytics" element=<AnalyticsCard/> />
                <Route path="/Campaigns" setSelected={setSelected} element=<ActiveCampaignsDashboard/> />
                <Route path="/Campaigns/:campaignID" element=<CampaignPage/> />
            </Routes>
        </div>
    )
}

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(null);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('auth'));
        if(localData) {
            console.log(localData);
            console.log('test');
            console.log(localData.refresh_token);
            fetch('http://localhost:3001/refresh/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({refresh_token: localData.refresh_token})
            })
                .then(response => response.json())
                .then(response => {
                    console.log("auth: ", response);
                    if (response.access_token && response.refresh_token) {
                        localStorage.setItem('auth', JSON.stringify({email: response.email, access_token: response.access_token, refresh_token: response.refresh_token}));
                        setLoggedIn(true);
                    }
                    else {
                        setLoggedIn(false);
                    }
                })
                .catch(error => {
                    console.error("fetching error: ", error);
                    setLoggedIn(false);
                });
        }
    }, []);
    return (
      <Routes>
          <Route path="*" element=<PublicRoutes /> />
          <Route path="Dashboard/*" element=<CreatorRoutes /> />
      </Routes>
    );
}
