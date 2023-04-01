interface Props {
    children: React.ReactElement | React.ReactElement[]
}

export default function LayoutPrivate({children}: Props) {
    return(
        <div className="flex justify-center w-full">
            {children}
        </div>
    )
}