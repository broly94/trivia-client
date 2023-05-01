interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function ContainerForm({ children }: Props) {
	return (
		<div className='flex flex-col justify-center mx-auto my-0 gap-5 p-5 py-10 w-3/4 md:w-3/5 lg:w-2/5 animate__animated animate__fadeIn bg-zinc-50 text-gray-800 border-2 border-zinc-400 transition-all'>
			{children}
		</div>
	);
}
