import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
            {/* <SideBar/> */}
            <Outlet/>
            <h1>DUPA</h1>
        </>
    )
}

export default Layout;