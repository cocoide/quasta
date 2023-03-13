import "styles/globals.css";
import TopBackNavi from '../../components/Elements/Navigation/TopBackNavi';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col bg-nothing w-[100%] border-x border-shadow">
      <TopBackNavi pageTitle={"コミュニティ"} />
      <div className="pb-20">{children}</div>
    </div>
  )
}
