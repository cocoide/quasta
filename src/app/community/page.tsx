import LaunchCommunity from '../../features/Community/components/LaunchCommunity';
import CommunityLists from '../../features/Community/components/CommunityLists';

async function fetchAllCommunity() {
    const res = await fetch(`https://quasta.vercel.app/api/community`, { method: "GET" })
    return res.json();
}

const page = async () => {

    const community = await fetchAllCommunity()

    return (
        <div className="">
            <LaunchCommunity />
            <CommunityLists community={community} />
        </div>
    )
}
export default page