'use client'
import SidebarButton from "./SidebarButton.jsx";
import {ChartBar, LayoutDashboard, SettingsIcon, TvMinimal, Megaphone } from "lucide-react";

export default function Sidebar(props) {
    return (
        <div className='h-screen pt-4 gap-8 w-52 primaryBackgroundGradient bg-primaryBG flex flex-col items-stretch px-3 text-center'>
            <h1 className='text-lg text-indigo-500'>
                <span>
                    Creator
                </span>
                <span className='font-bold'>
                    Incentives
                </span>
            </h1>
            <div className="flex flex-col gap-2">
                <SidebarButton
                    endIcon={<LayoutDashboard size={20} />}
                    selected={props.selected === "Home"}
                    selectedColor={'text-indigo-500'}
                    selectFunction={props.setSelected}
                    value={"Home"}
                />
                <SidebarButton
                    endIcon={<TvMinimal size={20}/>}
                    selected={props.selected === "Videos"}
                    selectedColor={'text-indigo-500'}
                    selectFunction={props.setSelected}
                    value={"Videos"}
                />
                <SidebarButton
                    endIcon={<Megaphone size={20} />}
                    selected={props.selected === "Campaigns"}
                    selectedColor={'text-indigo-500'}
                    selectFunction={props.setSelected}
                    value={"Campaigns"}
                />
                <SidebarButton
                    endIcon={<ChartBar size={20} />}
                    selected={props.selected === "Analytics"}
                    selectedColor={'text-indigo-500'}
                    selectFunction={props.setSelected}
                    value={"Analytics"}
                />
                <SidebarButton
                    endIcon={<SettingsIcon size={20} />}
                    selected={props.selected === "Settings"}
                    selectedColor={'text-indigo-500'}
                    selectFunction={props.setSelected}
                    value={"Settings"}
                />
            </div>
        </div>
    )
}