"use client"
import Link from 'next/link'
import { Squares2X2Icon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <div className="flex justify-between items-center py-2 px-5  md:px-10
         bg-nothing h-18 border-b border-shadow">

            <Link href="/" className="text-[30px] font-bold text-primary"
            >Quasta</Link>

            <div className="flex items-center space-x-4 md:space-x-5">
                <button className="text-white bg-primary font-bold p-2 rounded-md  text-base font-base"
                >サインイン</button>
                <Link href="/community" ><Squares2X2Icon className="h-10 w-10 text-primary" /></Link>
            </div>
        </div>
    )
}
export default Header