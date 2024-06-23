
const Layout = (   {children} ) => {
  return (
    <main className="flex">
      {/* <Sidebar/> */}
      <div className="flex flex-col">
        {/* <Topnav/> */}
        {children}
      </div>
    </main>
  )
}

export default Layout
