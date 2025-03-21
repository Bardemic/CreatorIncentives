import {useEffect, useState} from "react";
import Card from "./Card.jsx";
import PageHeader from "./PageHeader.jsx";

export default function ActiveCampaignsDashboard() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        try {
            fetch(`http://localhost:3001/campaigns/${JSON.stringify({accessToken: JSON.parse(localStorage.getItem("auth")).access_token})}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if(Array.isArray(data)) {
                        setCampaigns(data);
                        console.log(data.length);
                    }

                });
        } catch (error) {
            console.log(error);
        }

    }, [])

    return (
        <div className="flex flex-col w-full h-screen p-8 gap-4 items-start justify-start bg-primary">
            <PageHeader title="Campaigns Dashboard" />
            {campaigns.length > 0 && campaigns.map((campaign, index) => (
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