
interface Props {
    children: React.ReactElement | React.ReactElement[]
}

function LayoutPublic({ children }: Props) {
  return (
    <main className="flex w-3/4 mx-auto my-auto justify-center content-center h-auto">
        {children}
    </main>
  )
}

export default LayoutPublic