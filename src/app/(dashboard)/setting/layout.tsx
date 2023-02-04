import TopBackNavi from '../../../components/ui/TopBackNavi'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full">
            <TopBackNavi pageTitle={"設定"} />
            {children}
            <p className="w-[100%] h-[100px]"></p>
        </div>
    )
}