import VideoCard from "./VideoCard";

export default function LatestVideos() {
    return (
        <div className='p-4'>
            <h1 className='text-xl font-bold'>
                Latest Videos
            </h1>
            <div className='w-screen flex gap-4'>
                <VideoCard
                    description={"This description will be fetched from the video"}
                    imageLink={"https://picsum.photos/1080/1920"}
                    name={"Title of Video"}
                    views={"4257"}
                />
            </div>
        </div>
    )
}