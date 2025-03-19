import {Link} from "react-router";
export default function Button(props) {
    if (!props.type) {
        return (
            <Link to={`/Campaigns/${props.campaignID}`}>
                <div className="p-2 hover:cursor-pointer px-4 rounded-lg hover:hover:text-secondary bg-tertiary text-primary transition duration-75 hover:bg-tertiary/80">
                    {props.text || "Open"}
                </div>
            </Link>
        )
    }
    else if (props.type == "func") {
        return (
            <div onClick={props.onPressFunction} className="p-2 hover:cursor-pointer px-4 rounded-lg hover:primary  bg-tertiary text-primary transition duration-75 hover:bg-tertiary">
                {props.text || "Open"}
            </div>
        )
    }

}