'use client'

import Card from "./Card.jsx";
import {useEffect, useState} from "react";

export default function ActiveCampaigns(props) {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:3001/campaigns')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setCampaigns(data);
                });
        } catch (error) {
            console.log(error);
        }

    }, [])

    const getCampaigns = async () => {
        try {
            let data = await fetch('http://localhost:3001/campaigns')
            console.log(data);
            return [];
        } catch (e) {
            console.log(e)
            return [];
        }
    }

    return (
        <div className="">
            <h3 className="text-xl pl-1 font-bold">
                Active Campaigns
            </h3>
            <div className="flex gap-4">
                {campaigns && campaigns.map((campaign, index) => (
                    <Card
                        campaignID={campaign.id}
                        key={index}
                        description={campaign.description}
                        imageLink={campaign.image_link}
                        name={campaign.company_name}
                        payout={campaign.payout}
                    />
                ))}
            </div>
        </div>
    )
}