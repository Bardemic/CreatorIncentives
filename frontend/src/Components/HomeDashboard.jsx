import AnalyticsCard from "./AnalyticsCard.jsx";
import ActiveCampaigns from "./ActiveCampaigns.jsx";
import LatestVideos from "./LatestVideos.jsx";
import PageHeader from "./PageHeader.jsx";
import Toast from "./Toast.jsx";

export default function HomeDashboard(props) {
    return (
        <div className="flex flex-col w-full h-screen p-8 gap-4 items-start justify-start bg-primary">
            <PageHeader title="Home" />
            <div className="flex gap-4">
                <AnalyticsCard/>
                <AnalyticsCard/>
            </div>
            <ActiveCampaigns campaigns={props.campaigns}/>
            <LatestVideos/>
        </div>
    )
}