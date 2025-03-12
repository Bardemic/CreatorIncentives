import Button from "./Button";

export default function Card(props) {
    return (
        <div className="flex drop-shadow-sm justify-between w-80 h-40 bg-white rounded-lg">
            <div className="flex flex-col items-start justify-between p-2 pr-4">
                <div>
                    <h1 className="text-xl font-bold">
                        {props.name}
                    </h1>
                    <div className="text-slate-700">
                        {props.description}
                    </div>
                </div>

                <div className="flex w-full justify-between gap-4">
                    <Button />
                    <div className="flex justify-end items-center">
                        <span className="text-red-500 text-lg">${props.payout}</span>
                        <span className="text-md text-gray-600">/1k</span>
                    </div>
                </div>
            </div>
            <img className={'rounded-r-lg'} src={props.imageLink} alt=""/>

        </div>
    )
}