export default function CampaignDetail(props) {
    return (
        <div>
            <span className='text-neutral-500'>
                {props.first}
            </span>
            <span className='font-bold'>
                {props.second}
            </span>
            {props.third &&
                <span className='text-neutral-400'> (251,000 views)</span>
            }
        </div>
    )
}