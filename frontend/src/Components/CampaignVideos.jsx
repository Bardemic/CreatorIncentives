export default function CampaignVideos(props) {
    return (
        <div className='p-4 flex flex-col bg-secondary rounded-lg'>
            <h3 className='text-lg font-bold'>
                Latest Videos
            </h3>
            <div className='flex gap-4'>
                {props.videos &&
                    props.videos.map(video => (
                        <div className='flex p-2 items-start max-w-32 border justify-start flex-col gap-2' key={video.id}>
                            <div>Creator ID: {video.creator_id}</div>
                            <a className='text-blue-400' href={video.link}>Link</a>
                            <div>Views: {video.views}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}