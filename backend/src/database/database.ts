import {SupabaseClient} from "@supabase/supabase-js";

export const getAllCampaigns = async (supabase: SupabaseClient) => {
    let {data: campaigns, error} = await supabase
        .from('campaigns')
        .select('*');
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
        console.log("RUH ROH, ERROR ON AISLE DATABASE.TS ROW GETCAMPAIGN");
        return error; //add some error handling for when campaign id invalid plzzz
    }
    if (campaign == null) {
        return null;
    }
    console.log(campaign);

    return campaign[0];
}