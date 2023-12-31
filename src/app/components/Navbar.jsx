import Link from "next/link";
import {UserAuth} from "@/app/context/AuthContext";

function Navbar(){
    const {user, googleSignIn, logOut} = UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
            <ul className='flex'>
                <li className='p-2 cursor-pointer'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='p-2 cursor-pointer'>
                    <Link href={'/about'}>About</Link>
                </li>
                <li className='p-2 cursor-pointer'>
                    <Link href={'/profile'}>Profile</Link>
                </li>
            </ul>
            {!user ? (<ul className="flex">
                <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                    Login
                </li>
                <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                    Sign up
                </li>
            </ul>) : (
                <div>
                    <p>Welcome {user.displayName}</p>
                    <p className='cursor-pointer' onClick={handleSignOut}>Sign Out</p>
                </div>
            )}
        </div>
    )
}

export default Navbar;