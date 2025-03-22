import {useEffect, useState} from "react";
import Card from "./Card.jsx";
import PageHeader from "./PageHeader.jsx";

export default function ActiveCampaignsDashboard() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        try {
            fetch(`http://localhost:3001/campaigns/`)
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
        <div className="flex flex-col w-full h-screen p-8 gap-8 items-start justify-start bg-primary">
            <PageHeader title="Campaigns Dashboard" />
            <div>
                <h2 className='text-xl opacity-70 font-bold pb-1'>
                    Your Campaigns
                </h2>
                <div className='flex gap-4'>
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
            </div>
            <div>
                <h2 className='text-xl opacity-70 font-bold pb-1'>
                    Latest Campaigns
                </h2>
                <div className='flex gap-4'>
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
            </div>

        </div>
        )
}