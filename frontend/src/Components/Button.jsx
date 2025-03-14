import {Link} from "react-router";
export default function Button(props) {
    return (
        <Link to={`/Campaigns/${props.campaignID}`}>
            <div className="p-2 hover:cursor-pointer px-4 rounded-lg hover:text-white  bg-indigo-500 text-stone-50 transition duration-75 hover:bg-indigo-500/80">
                Open
            </div>
        </Link>
    )
}