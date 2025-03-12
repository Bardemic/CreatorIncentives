export default function PageHeader(props) {
    return (
        <h1 className="text-2xl font-bold text-gray-900">
            {props.title}
        </h1>
    )
}