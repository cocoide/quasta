import LaunchCommunity from './LaunchCommunity';

import { API_URL } from '../../libs/consts';
import CommunityLists from './CommunityLists';

// async function getCommunity() {
//     const res = await fetch(`${API_URL}/community`)
//     return res.json();
// }

const page = async () => {

    // const community = await getCommunity()

    return (
        <div className="">
            <LaunchCommunity />
            {/* <CommunityLists community={community} /> */}
        </div>
    )
}
export default page