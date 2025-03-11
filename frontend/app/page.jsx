import Sidebar from "@/Components/Sidebar";
import ActiveCampaigns from "@/Components/ActiveCampaigns";
import AnalyticsCard from "@/Components/AnalyticsCard";
import LatestVideos from "@/Components/LatestVideos";


export default function Home() {
    let testCampaigns = [{description: "Modern AI calorie tracking app",imageLink: "https://picsum.photos/220/300", name: "CalorieOne", payout:"0.05"}, {description: "Track your food intake on one app", imageLink: "https://picsum.photos/220/300", name: "FoodCheck", payout: "0.04"}]

  return (
    <div className="h-screen flex items-center">
      <Sidebar />
      <div className="flex flex-col h-screen p-8 gap-4 items-start justify-start bg-neutral-50 w-full">
          <div className="flex gap-4">
              <AnalyticsCard/>
              <AnalyticsCard/>
          </div>
          <ActiveCampaigns campaigns={testCampaigns} />
          <LatestVideos />
      </div>
    </div>
  );
}
