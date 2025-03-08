import Image from "next/image";
import Card from "@/Components/Card";
import Sidebar from "@/Components/Sidebar";
import ActiveCampaigns from "@/Components/ActiveCampaigns";


export default function Home() {
    let testCampaigns = [{description: "Modern AI calorie tracking app",imageLink: "https://picsum.photos/220/300", name: "CalorieOne", payout:"0.05"}, {description: "Track your food intake on one app", imageLink: "https://picsum.photos/220/300", name: "FoodCheck", payout: "0.04"}]

  return (
    <div className="h-screen flex items-center">
      <Sidebar />
      <div className="flex flex-col h-screen items-start justify-start">
          <ActiveCampaigns campaigns={testCampaigns} />
      </div>
    </div>
  );
}
