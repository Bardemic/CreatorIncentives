import { useParams } from "react-router";
import {useEffect} from "react";

export default function CampaignPage() {
    let params = useParams();
    useEffect(() => {
        console.log(params.campaignID)
    }, [params.campaignID]);
    return (
        <div>
            Hi
        </div>
    )
}