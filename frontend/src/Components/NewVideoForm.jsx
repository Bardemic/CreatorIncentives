import {useEffect, useState} from "react";
import Button from "./Button.jsx";

export default function newVideoForm(props) {
    const [newVideo, setNewVideo] = useState({platform: "TikTok", link: ""});

    const createNewFunction = async () => {
        let data = {link: newVideo.link, user_id: 2592, campaign_id: props.campaign_id};
        console.log("CREATE NEW VIDEO");
        //let data2 = await fetch(`http://localhost:3001/addVideo/${newVideo.link}-${2592}-${props.campaign_id}`, {
        let data2 = await fetch(`http://localhost:3001/addVideo/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {console.log(data)});
        console.log(data2);
    }

    /*let link = req.params.link;
    let user_id = req.params.user_id;
    let campaign_id = req.params.campaign_id;*/

    useEffect(() => {
        console.table(newVideo);
    }, [newVideo]);
    return (
        <div className='flex items-start flex-col gap-4 bg-secondary p-4 rounded-lg'>
            <h3 className='text-lg font-bold pb-4'>
                Add Video to Campaign
            </h3>
            <input type='text' className='bg-neutral-100 p-1 min-w-96' onInput={(e) => setNewVideo({...newVideo, link: e.target.value})} value={newVideo.link} placeholder='add link here' />
            <div onClick={createNewFunction}><Button type={'func'} text={'Add Video'}/></div>

        </div>
    )
}