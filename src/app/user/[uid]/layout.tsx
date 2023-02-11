import "styles/globals.css";
import TopBackNavi from '../../../components/ui/TopBackNavi';

export default function RootLayout({
    children, params
}: {
    children: React.ReactNode, params: { uid: string }
}) {
    return (
        <div className="flex flex-col bg-white w-[100%] border-x border-shadow h-full">
            <div className="pb-20">{children}</div>
        </div>
    )
}