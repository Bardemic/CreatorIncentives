// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import * as process from "node:process";
import {getAllCampaigns} from "./database/database";
let cors = require("cors");


dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 3001;

const supabase: SupabaseClient = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_ANON_KEY || "");

app.get("/", (req: Request, res: Response) => {
    res.send("I LOVE!! CREATORINCENTIVES");
});

app.get("/campaigns", async (req: Request, res: Response) => {
    let data : any = await getAllCampaigns(supabase);
    res.send(JSON.stringify(data));
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
