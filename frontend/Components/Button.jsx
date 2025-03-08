export default function Button(props) {
    return (
        <button onClick={() => props.selectFunction(props.value)} className={`py-2 px-4 w-full justify-between flex gap-4 ${props.selected ? 'text-gray-100' : 'text-stone-400'} items-center transition delay-75 text-lg duration-150 rounded-md hover:bg-black/5`}>
            {props.value} {props.endIcon}
        </button>
    )
}