'use client'
import SidebarButton from "./SidebarButton.jsx";
import {ChartBar, LayoutDashboard, SettingsIcon, TvMinimal, Megaphone } from "lucide-react";
import Button from "./Button.jsx";

export default function Sidebar(props) {
    return (
        <div className='h-screen pt-4 gap-8 w-60 mx-2 max-w-52 min-w-52  flex flex-col items-stretch px-3 text-center'>
            <h1 className='text-lg text-tertiary'>
                <span>
                    Short
                </span>
                <span className='font-bold'>
                    Incentives
                </span>
            </h1>
            <div className="flex flex-col gap-2">
                <SidebarButton
                    endIcon={<LayoutDashboard size={28} />}
                    selected={props.selected === "Home"}
                    selectedColor={'text-tertiary'}
                    selectFunction={props.setSelected}
                    value={"Home"}
                />
                <SidebarButton
                    endIcon={<TvMinimal size={28}/>}
                    selected={props.selected === "Videos"}
                    selectedColor={'text-tertiary'}
                    selectFunction={props.setSelected}
                    value={"Videos"}
                />
                <SidebarButton
                    endIcon={<Megaphone size={28} />}
                    selected={props.selected === "Campaigns"}
                    selectedColor={'text-tertiary'}
                    selectFunction={props.setSelected}
                    value={"Campaigns"}
                />
                <SidebarButton
                    endIcon={<ChartBar size={28} />}
                    selected={props.selected === "Analytics"}
                    selectedColor={'text-tertiary'}
                    selectFunction={props.setSelected}
                    value={"Analytics"}
                />
                <SidebarButton
                    endIcon={<SettingsIcon size={28} />}
                    selected={props.selected === "Settings"}
                    selectedColor={'text-tertiary'}
                    selectFunction={props.setSelected}
                    value={"Settings"}
                />
            </div>
            <div className='bg-secondary text-tertiary card p-2'>
                Email
                <div>{JSON.parse(localStorage.getItem('auth')) && JSON.parse(localStorage.getItem('auth')).email}</div>
                <Button
                    type='func'
                    onPressFunction={props.handleSignOut}
                    text='Sign Out'
                />
            </div>
        </div>
    )
}