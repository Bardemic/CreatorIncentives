import {useEffect, useState} from "react";
import Card from "./Card.jsx";
import PageHeader from "./PageHeader.jsx";

export default function ActiveCampaignsDashboard() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:3001/campaigns')
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    setCampaigns(data);
                });
        } catch (error) {
            console.log(error);
        }

    }, [])

    return (
        <div className="flex flex-col w-full h-screen p-8 gap-4 items-start justify-start bg-neutral-50">
            <PageHeader title="Campaigns Dashboard" />
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
        )
}