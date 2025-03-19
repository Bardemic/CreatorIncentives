import {EyeIcon} from "lucide-react";

export default function VideoCard(props) {
    return (
        <div className="flex drop-shadow-sm justify-between w-80 h-60 bg-secondary rounded-lg">
            <div className="flex flex-col items-start justify-between p-4 max-w-1/2">
                <div>
                    <h1 className="text-xl font-bold">
                        {props.name}
                    </h1>
                    <div className="text-slate-700">
                        {props.description}
                    </div>
                </div>

                <div className="flex w-full items-center gap-1">
                    <span className="text-slate-700 text-lg">{props.views}</span>
                    <EyeIcon size={20} color={'blue'} />
                </div>
            </div>
            <img className={'rounded-r-lg'} src={props.imageLink} alt=""/>

        </div>
    )
}