interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function DivContacinerClassic({ children }: Props) {
    return (
        <div className="flex flex-col justify-center mx-auto my-0 w-full md:w-3/4 lg:w-2/5 animate__animated animate__fadeIn m-5 px-7 py-10 bg-neutral-100 text-zinc-800 shadow-lg shadow-zinc-400 border-2 border-zinc-300">
            {children}
        </div>
    )
}