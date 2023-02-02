"use client"

import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation"

const TopBackNavi = ({ pageTitle }: { pageTitle: string }) => {
    const router = useRouter()
    return (
        <div className="w-full p-5 h-12 relative bg-nothing flex items-center border-b border-shadow">
            <button className="flex items-center rounded-full p-2 hover:bg-neutral duration-300" onClick={() => router.back()}
            ><ChevronLeftIcon className="text-primary h-5 w-5" /></button>
            <h2 className="absolute
            top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-600 text-xl">{pageTitle}</h2>
        </div>
    )
}
export default TopBackNavi