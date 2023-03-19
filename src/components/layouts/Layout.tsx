
interface Props {
    children: React.ReactElement | React.ReactElement[]
}

function Layout({ children }: Props) {
  return (
    <main className="flex w-3/4 mx-auto my-auto justify-center content-center h-auto place-items-center">
        {children}
    </main>
  )
}

export default Layout