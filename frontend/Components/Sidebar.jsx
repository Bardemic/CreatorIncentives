'use client'
import SidebarButton from "@/Components/SidebarButton";
import {LayoutDashboard, SettingsIcon} from "lucide-react";
import {useState} from "react";

export default function Sidebar() {
    const [selected, setSelected] = useState("HomePage");
    return (
        <div className='h-screen pt-4 gap-8  w-52 flex flex-col items-stretch px-3 text-center'>
            <h1 className='text-xl text-indigo-500 font-bold'>
                CreatorIncentives
            </h1>
            <div className="flex flex-col gap-2">
                <SidebarButton
                    endIcon={<LayoutDashboard size={20} />}
                    selected={selected === "HomePage"}
                    selectedColor={'text-indigo-500'}
                    selectFunction={setSelected}
                    value={"HomePage"}
                />
                <SidebarButton
                    endIcon={<SettingsIcon size={20} />}
                    selected={selected === "Settings"}
                    selectedColor={'text-indigo-500'}
                    selectFunction={setSelected}
                    value={"Settings"}
                />
            </div>
        </div>
    )
}