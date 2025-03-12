import AnalyticsCard from "./AnalyticsCard.jsx";
import ActiveCampaigns from "./ActiveCampaigns.jsx";
import LatestVideos from "./LatestVideos.jsx";

export default function HomeDashboard(props) {
    return (
        <div className="flex flex-col w-full h-screen p-8 gap-4 items-start justify-start bg-neutral-50">
            <div className="flex gap-4">
                <AnalyticsCard/>
                <AnalyticsCard/>
            </div>
            <ActiveCampaigns campaigns={props.campaigns}/>
            <LatestVideos/>
        </div>
    )
}