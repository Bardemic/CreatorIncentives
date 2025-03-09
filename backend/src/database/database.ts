import {SupabaseClient} from "@supabase/supabase-js";

export const getAllCampaigns = async (supabase: SupabaseClient) => {
    let {data: campaigns, error} = await supabase
        .from('campaigns')
        .select('*');
    if (error) {
        console.log(error);
        console.log("RUH ROH, ERROR ON AISLE DATABASE.TS");
        return error;
    }
    console.log(campaigns);

    return campaigns;
}