"use client"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRefExp } from '../../../utils/hooks/useRegExp';

const SuggestedLists = ({
    keyword,
    searchLists
}: {
    keyword: string,
    searchLists: { query: string }[]
}) => {
    const { suggestions } = useRefExp({ keyword, searchLists })
    return (
        <div className="flex flex-col items-start justify-center w-full ">
            {suggestions?.map((s, i) => {
                return (
                    <Link href={`/${s.query}`} key={i} className="hover:bg-neutral  text-[17px] p-2 w-full border-y border-shadow flex items-center">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 mr-3" />{s.query}
                    </Link>
                )
            })}
        </div>
    )
}

export default SuggestedLists