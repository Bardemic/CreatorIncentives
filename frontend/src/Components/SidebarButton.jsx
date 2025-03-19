import {Link} from "react-router";

export default function SidebarButton(props) {
    return (
        <Link to={`/${props.value}`}>
            <div onClick={() => props.selectFunction(props.value)}
                 className={`py-2 hover:cursor-pointer px-4 w-full justify-between flex gap-4 ${props.selected ? props.selectedColor : 'text-stone-400'} ${props.selected && 'bg-secondary'} items-center transition text-lg duration-150 rounded-md ${!props.selected && 'hover:bg-secondary/50'}`}>
                {props.value} {props.endIcon}
            </div>
        </Link>
    )
}