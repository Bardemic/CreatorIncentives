import {Link} from "react-router";
export default function Button(props) {
    if (!props.type) {
        return (
            <Link to={`/Campaigns/${props.campaignID}`}>
                <div className="p-2 hover:cursor-pointer px-4 rounded-lg hover:text-white  bg-indigo-500 text-stone-50 transition duration-75 hover:bg-indigo-500/80">
                    {props.text || "Open"}
                </div>
            </Link>
        )
    }
    else if (props.type == "func") {
        return (
            <div onClick={props.onPressFunction} className="p-2 hover:cursor-pointer px-4 rounded-lg hover:text-white  bg-indigo-500 text-stone-50 transition duration-75 hover:bg-indigo-500/80">
                {props.text || "Open"}
            </div>
        )
    }

}