import {Link} from "react-router";

export default function SidebarButton(props) {
    return (
        <Link to={`/${props.value}`}>
            <div onClick={() => props.selectFunction(props.value)}
                 className={`py-2 hover:cursor-pointer px-4 w-full justify-between flex gap-4 ${props.selected ? props.selectedColor : 'text-stone-400'} items-center transition text-lg duration-150 rounded-md hover:bg-black/5`}>
                {props.value} {props.endIcon}
            </div>
        </Link>
    )
}