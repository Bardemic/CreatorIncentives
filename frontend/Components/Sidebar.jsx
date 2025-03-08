'use client'
import Button from "@/Components/Button";
import {LayoutDashboard, SettingsIcon} from "lucide-react";
import {useState} from "react";

export default function Sidebar() {
    const [selected, setSelected] = useState("HomePage");
    return (
        <div className='h-screen pt-4 gap-8 bg-indigo-500 w-52 flex flex-col items-stretch px-3 text-center'>
            <h1 className='text-xl font-bold text-white'>
                CreatorIncentives
            </h1>
            <div className="flex flex-col gap-2">
                <Button
                    endIcon={<LayoutDashboard size={20} />}
                    selected={selected === "HomePage"}
                    selectFunction={setSelected}
                    value={"HomePage"}
                />
                <Button
                    endIcon={<SettingsIcon size={20} />}
                    selected={selected === "Settings"}
                    selectFunction={setSelected}
                    value={"Settings"}
                />
            </div>
        </div>
    )
}