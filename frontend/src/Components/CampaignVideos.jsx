export default function CampaignVideos(props) {
    return (
        <div className='p-4 flex flex-col bg-secondary rounded-lg'>
            <h3 className='text-lg font-bold'>
                Latest Videos
            </h3>
            <div className='flex'>
                {props.videos &&
                    props.videos.map(video => (
                        <div className='flex p-2 border flex-col gap-2' key={video.id}>
                            <div>Creator ID: {video.creator_id}</div>
                            <div>Link: {video.link}</div>
                            <div>Views: {video.views}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}