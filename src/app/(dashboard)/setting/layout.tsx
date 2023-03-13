import Link from 'next/link'
import TopBackNavi from '../../../components/Elements/Navigation/TopBackNavi'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full flex flex-col items-center">
            <TopBackNavi pageTitle={"設定"} />
            <div className="flex flex-row items-center overflow-hidden font-bold mt-3">
                <Link href={"/setting"} className="p-2 border-b border-gray-200 text-gray-600">アカウント</Link>
                <Link href={"/setting/profile"} className="p-2 border-b border-blue-300 text-blue-300">プロフィール</Link>
                <Link href={"/setting"} className="p-2 border-b border-gray-200 text-gray-600">カード情報</Link>
            </div>
            {children}
            <p className="w-[100%] h-[100px]"></p>
        </div>
    )
}