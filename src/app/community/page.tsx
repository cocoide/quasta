import LaunchCommunity from './LaunchCommunity';
import CommunityLists from './CommunityLists';

async function getCommunity() {
    const res = await fetch(`https://quasta.vercel.app/api/community`, { method: "GET" })
    return res.json();
}

const page = async () => {

    const community = await getCommunity()

    return (
        <div className="">
            <LaunchCommunity />
            <CommunityLists community={community} />
        </div>
    )
}
export default page