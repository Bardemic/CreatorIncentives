import Card from "@/Components/Card";

export default function ActiveCampaigns(props) {
    return (
        <div className="p-2">
            <h3 className="text-xl pl-1 font-bold">
                Active Campaigns
            </h3>
            <div className="flex gap-4">
                {props.campaigns.map((campaign, index) => (
                    <Card
                        key={index}
                        description={campaign.description}
                        imageLink={campaign.imageLink}
                        name={campaign.name}
                        payout={campaign.payout}
                    />
                ))}
            </div>
        </div>
    )
}