import "styles/globals.css";
import TopBackNavi from '../../../components/ui/TopBackNavi';


export default function RootLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { query: string }
}) {
    return (
        <div className="bg-white w-full h-full border-x border-shadow">
            <div className="h-15 sticky top-0">
                <TopBackNavi pageTitle={decodeURI(params.query)} />
            </div>
            <div className="">{children}</div>
        </div>
    )
};

