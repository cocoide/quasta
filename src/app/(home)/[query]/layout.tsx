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
            <div className="h-15 sticky top-0 ">
                <TopBackNavi pageTitle={"回答"} />
            </div>
                <h2 className="text-xl font-bold text-gray-700 p-2 text-center w-full">{decodeURI(params.query)}</h2>
            <div className="">{children}</div>
        </div>
    )
};

