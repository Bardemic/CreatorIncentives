// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import * as process from "node:process";
import {getAllCampaigns, getCampaign} from "./database/database";
let cors = require("cors");


dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

const supabase: SupabaseClient = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_ANON_KEY || "");

app.get("/", (req: Request, res: Response) => {
    res.send("I LOVE!! CREATORINCENTIVES");
});

app.get("/campaigns", async (req: Request, res: Response) => {
    let data : any = await getAllCampaigns(supabase);
    res.send(JSON.stringify(data));
})

app.get("/campaigns/:id", async (req: Request, res: Response) => {
    let data : any = await getCampaign(supabase, req.params.id);
    if (data == null) {
        res.status(404).send("No campaign found!");
    }
    res.send(JSON.stringify(data));
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


//following code is VERY, VERY TEMPORARY FOR TESTING PURPOSES.
//reason: it is 2 am, I want to add the ability to add videos, I don't want to do it properly. sue me.
//app.post("/addVideo/:link-:user_id-:campaign_id", async (req: Request, res: Response) => {
app.post("/addVideo/", async (req: Request, res: Response) => {
    if (!req.body.link || !req.body.user_id || !req.body.campaign_id) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    const video_data_user = { link: req.body.link, user_id: req.body.user_id, campaign_id: req.body.campaign_id } = req.body;

    //add validation for what should be getting sent

    console.table(video_data_user);

    try {
        fetch(`https://ensembledata.com/apis/tt/post/info?url=${video_data_user.link}&token=${process.env.ENSEMBLE_API_KEY}`)
            .then(response => response.json())
            .then(async data => {
                console.log(data);
                if(data.data) {
                    let {data: campaign, error} = await supabase
                        .from('videos')
                        .insert([
                            {
                                link: video_data_user.link,
                                creator_id: video_data_user.user_id,
                                campaign_id: video_data_user.campaign_id,
                                views: data.data[0].statistics.play_count,
                            }
                        ])
                    if (error) {
                        console.log("error here here!", error);
                        console.log("NOOOOO, ERROR ON AISLE DATABASE.TS ROW GETCAMPAIGN");
                        res.send(JSON.stringify("error: likely with DB")); //add some error handling for when campaign id invalid plzzz
                    }
                    res.send(JSON.stringify("Video Added to Campaign!"));
                }
                else {
                    res.send(JSON.stringify("error: link likely not valid"));
                }

            })
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error ):  ");
    }

})