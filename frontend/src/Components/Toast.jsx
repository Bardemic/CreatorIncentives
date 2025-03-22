export default function Toast(props) {
    return (
        <div className={`duration-300 text-red-600 transition-all transform p-4 px-8 fixed bottom-5 ${props.show ? 'right-5' : 'right-[-95px]'} primaryBackgroundGradient card`}>
            {props.message ? props.message : 'Active Session Logged Out, Redirecting'}
        </div>
    )
}