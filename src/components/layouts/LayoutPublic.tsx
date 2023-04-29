interface Props {
	children: React.ReactElement | React.ReactElement[];
}

export default function LayoutPublic({ children }: Props) {
	return <main className='flex justify-center w-full h-screen'>{children}</main>;
}
