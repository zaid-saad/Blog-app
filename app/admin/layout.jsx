import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponent/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {

    return (
        <>
        <div className="flex">
            <ToastContainer theme = "dark" />
        <Sidebar/>
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-3 max-h-[100px] px-12 border-b border-black ">
                <h3 className="font-medium">Admin Panel</h3>
                <Image src={assets.profile_icon} alt="profile_icon" width={40} />
            </div>
            {children}
        </div>
        </div>
           
        </>
    );

}