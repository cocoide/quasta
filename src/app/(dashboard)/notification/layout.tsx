import TopBackNavi from '../../../components/Elements/Navigation/TopBackNavi'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full">
            <TopBackNavi pageTitle={"通知"} />
            {children}
            <p className="w-[100%] h-[100px]"></p>
        </div>
    )
}