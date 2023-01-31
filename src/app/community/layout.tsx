import "styles/globals.css";
import Header from '../../components/layout/Header'
import Invitation from './Invitation';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center bg-nothing">
      <div className="w-[100%] border-x border-shadow pb-20">{children}</div>
      {/* <Invitation /> */}
    </div>
  )
}
