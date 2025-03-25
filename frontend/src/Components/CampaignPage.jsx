import { useParams } from "react-router";
import {useEffect, useState} from "react";
import PageHeader from "./PageHeader.jsx";
import CampaignDetail from "./CampaignDetail.jsx";
import Button from "./Button.jsx";
import NewVideoForm from "./NewVideoForm.jsx";
import CampaignVideos from "./CampaignVideos.jsx";

export default function CampaignPage() {
    let params = useParams();
    const [campaign, setCampaign] = useState({});
    const [campaignVideos, setCampaignVideos] = useState([]);

    useEffect(() => {
        try {
            fetch(`http://localhost:3001/campaigns/${params.campaignID}`)
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(data => {
                                console.log(data);
                                if (data && data.campaign) {
                                    setCampaign(data.campaign);
                                    setCampaignVideos(data.campaignVideos);
                                } //add else redirect to 404
                            })

                    }
                    else {
                        return ("Error!");
                    }
                })
        } catch(error) {
            console.log(error);
        }
    }, [params.campaignID]);



    /*useEffect(() => {
        console.log(params.campaignID)
    }, [params.campaignID]); *///ideas: show stuff like other videos used, total views for campaign, etc
    return (
        <div className='h-full  w-full p-4'>
            {campaign.id &&
                <div className='flex flex-col gap-4 w-1/2'>
                    <PageHeader title={campaign.company_name} />
                    <h2 className='text-lg text-neutral-700'>
                        {campaign.description}
                    </h2>
                    <div className='flex flex-col gap-1 bg-secondary p-4 rounded-lg card'>
                        <h3 className='text-xl font-bold pb-4'>
                            Campaign Details
                        </h3>
                        <CampaignDetail first={'Payout Per 1000 Views: '} second={`$${campaign.payout}`} />
                        <CampaignDetail first={'Max Payout Per Video: '} second={`$${campaign.payout * 251}`}  third={' (251,000 views)'}/>
                        <CampaignDetail first={'Remaining Payout Budget: '} second={`$${3000 - (campaign.payout * 32)}`}/>
                        <div className='outline-1 w-full my-2 outline-neutral-400'></div>
                        <CampaignDetail first={'Total Videos: '} second={19} />
                        <CampaignDetail first={'Total Views: '} second={'39,245'} />
                    </div>
                    <CampaignVideos videos={campaignVideos} />
                    <NewVideoForm campaign_id={campaign.id} />

                </div>}
        </div>
    )
}