import TopBackNavi from '../../../components/ui/TopBackNavi'
import { db } from '../../../libs/prisma'
import Image from 'next/image';
import Link from 'next/link'
import { BriefcaseIcon } from '@heroicons/react/24/outline';

export const revalidate = 300
export const dynamicParams = false

async function FetchUniqueUserData(uid: string) {
    const res = await db.user.findUnique({
        where: { id: uid as string },
        select: {
            id: true,
            name: true,
            image: true,
            profile: {
                select: {
                    occupation: true,
                    overview: true,
                }
            }
        },
    })
    return res
}

const page = async ({ params }: { params: { uid: string } }) => {
    const { uid } = params
    const user = await FetchUniqueUserData(uid)
    return (
        <div className="w-full flex flex-col items-center">
            <TopBackNavi pageTitle={user?.name as string} />

            <div className="w-full relative">
                <Image src="/header.png" width={500} height={200} alt={user?.name as string}
                    className="h-[120px] w-[100%]  bg-shadow" />
                <Image src={user?.image as string} width={70} height={70} alt={user?.name as string}
                    className="h-[100px] w-[100px] rounded-full bg-shadow absolute bottom-[-50px] left-[5%]
            ring-4 ring-white" />
            </div>
            <div className="w-full flex flex-col  p-5 l">

                <Link href={"/setting/profile"} className="ring-1 ring-outline rounded-full p-1 ml-auto w-auto"
                >プロフィールを編集</Link >
                <div className="w-full flex flex-row  space-x-3 items-center mt-[10px]">
                    <h3 className="">{user?.name}</h3>
                    <h4 className=" text-gray-500 text-sm">@{user?.id}</h4>
                </div>
                <h4 className="my-1 text-gray-800">{user?.profile?.overview}</h4>
                <h4 className=" text-gray-500 text-sm flex items-center"><BriefcaseIcon className="h-4 w-4 mr-1" />{user?.profile?.occupation}</h4>
                <div className="w-full flex flex-row  space-x-3 items-center mt-1">
                    <h3 className="flex items-center">323098<div className=" text-gray-400 text-sm">フォロー中</div></h3>
                    <h3 className="flex items-center">121000<div className=" text-gray-400 text-sm">フォロワー</div></h3>
                </div>
            </div>
        </div>
    )
}
export default page

export async function generateStaticParams() {
    const users = await db.user.findMany({
        select: { id: true }
    })
    return users.map((user) => ({
        uid: user.id
    }));
}