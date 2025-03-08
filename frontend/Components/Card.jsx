export default function Card(props) {
    return (
        <div className="flex justify-between w-72 h-40 bg-stone-100 rounded-lg">
            <div className="flex flex-col items-start justify-between p-2 max-w-1/2">
                <div>
                    <h1 className="text-xl font-bold">
                        {props.name}
                    </h1>
                    <div className="text-slate-700">
                        {props.description}
                    </div>
                </div>

                <div className="flex w-full justify-end items-center gap-1">
                    <span className="text-red-500 text-lg">${props.payout}</span>
                    <span className="text-md text-gray-600">/1k</span>
                </div>
            </div>
            <img className={'rounded-r-lg'} src={props.imageLink} alt=""/>

        </div>
    )
}