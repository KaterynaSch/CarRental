import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <div style={{minHeight:'100vh', backgroundColor: '#def7f1', margin: '0 auto', padding: '0 16px' }}>
            <div>Header</div>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    )
}