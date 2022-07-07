import { AppBar }  from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
// import { Container } from './Layout.styled';

export default function Layout() {
    return (
        <>
        <AppBar />
        <Outlet />
        </>

    );
}