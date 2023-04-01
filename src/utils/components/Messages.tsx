
interface Props {
    message: string
}
export const ErrorMessages = ({message}: Props) => {
    return (
        <div className="bg-red-500 text-white font-mono font-medium pl-2">{message}</div>
    )
}