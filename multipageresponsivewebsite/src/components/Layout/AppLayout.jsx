import { Headers } from '../UI/Headers.tsx'
import { Footers } from '../UI/Footers.tsx'
import { Outlet } from 'react-router-dom'
export const AppLayout = () => {
    return (
        <>
            <Headers />
            <Outlet />
            <Footers />
        </>
    )
}