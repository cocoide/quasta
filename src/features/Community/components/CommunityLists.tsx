import NextjsImage from '../../../components/Elements/Image/NextjsImage'

interface CommunityProps {
    id: string
    name: string
    overview: string
    image: string | undefined
}

const CommunityLists = ({ community }: { community: CommunityProps[] }) => {
    return (
        <div className="flex flex-col items-center justify-start">
            {community.map((c, i) => {
                return (
                    <div className="justify-start flex items-center bg-white ring-1 ring-shadow shadow-sm  p-3 w-full hover:bg-neutral duration-500" key={i}>

                        <NextjsImage src={c.image} alt={c.name} w={80} h={80} style={"rounded-2xl aspect-square h-15  shadow-md ring-2 ring-gray-300"} />

                        <div className="flex flex-col p-3 justify-center">
                            <h2 className="font-bold text-gray-700 text-sm"> {c.name}</h2>
                            <h3 className="text-xs text-gray-500"> {c.overview}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CommunityLists