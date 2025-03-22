import {SupabaseClient} from "@supabase/supabase-js";
import {getUser} from "../auth/user.auth";

export const getAllCampaigns = async (supabase: SupabaseClient) => {
    let {data: campaigns, error} = await supabase
        .from('campaigns')
        .select('*')
    if (error) {
        console.log(error);
        console.log("RUH ROH, ERROR ON AISLE DATABASE.TS ROW GETALLCAMPAIGNS");
        return error;
    }
    console.log(campaigns);

    return campaigns;
}

export const getCampaign = async (supabase: SupabaseClient, id: string) => {
    let {data: campaign, error} = await supabase
        .from('campaigns')
        .select("*")
        .eq('id', id)
    if (error) {
        console.log(error);
        console.log("OH GOD, ERROR ON AISLE DATABASE.TS ROW GETCAMPAIGN ONE");
        return error; //add some error handling for when campaign id invalid plzzz
    }

    if (campaign == null) {
        return campaign;
    }

    console.log(campaign[0].id, "TESTTT");

    let {data: campaignVideos, error: errortwo} = await supabase
        .from('videos')
        .select('*')
        .eq('campaign_id', id)


    if (errortwo) {
        console.log(errortwo);
        console.log("NOOO, ERROR ON AISLE DATABASE.TS ROW GETCAMPAIGN TWO");
        return errortwo; //add some error handling for when campaign id invalid plzzz
    }

    console.log(campaign);
    console.log(campaignVideos)

    return {campaign: campaign[0], campaignVideos: campaignVideos};
}