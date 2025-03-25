import {Link} from "react-router";

export default function SidebarButton(props) {
    return (
        <Link to={`../Dashboard/${props.value}`}>
            <div onClick={() => props.selectFunction(props.value)}
                className={`py-2 hover:cursor-pointer w-full relative justify-between flex ${!props.selected ? 'text-black' : props.selectedColor} items-center transition text-lg duration-150 rounded-md ${!props.selected && `hover:text-tertiary/50`}`}
            >
                <div className={`w-12 min-w-12 h-12 transition duration-300 rounded-lg ${props.selected ? 'sidebarButtonGradientSelected' : 'sidebarButtonGradient'} flex items-center justify-center`}>
                    <div className={`w-9 h-9 flex transition duration-300 ${props.selected ? 'sidebarFrontButtonSelected' : 'sidebarFrontButton' } items-center justify-center`} />
                    <div className={`absolute transition duration-300 ${props.selected ? 'text-white' : props.selectedColor}`}>
                        {props.endIcon}
                    </div>
                </div>
                {props.value}
            </div>
        </Link>
    )
}