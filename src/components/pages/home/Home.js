import { Link, Outlet } from "react-router-dom"
import {ThemeToggle} from "../../common";
import './home.css';
import { Header } from '../../template/Header';

export const Home = () => {
    return (
        <>
            <Header />
            <Outlet />
           {/*  <div className={"flex flex-col min-h-screen items-center justify-center dark:bg-gray-800 dark:text-white"}>
         
                <h1 className="text-6xl mb-6">Welcome to Learnly Pharmacy!</h1>
                <a href={'#'} target={'_blank'} className={'text-lg bg-gray-200 dark:bg-gray-700 rounded-xl px-8 py-4'}>Inventory</a>
                <ThemeToggle />
            </div> */}
        </>
    )
}