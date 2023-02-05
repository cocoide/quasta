import { useEffect, useState } from 'react'

// <T extends {[key in string] :string}>

export const useRefExp =<T extends {query:string}>({
    keyword,
    searchLists,
}: {
    keyword: string,
    searchLists: T[]
}) => {
    const [suggestions, setSuggestions] = useState<T[]>()
    useEffect(() => {
        if (keyword?.length == 0) {
            return undefined
        }
        let matches = []
        matches = searchLists.filter((opts) => {
            const regex = new RegExp(`${keyword}`, "gi");
            return opts.query.match(regex)
        })
        setSuggestions(matches)
    }, [keyword, searchLists])
    return { suggestions }
};