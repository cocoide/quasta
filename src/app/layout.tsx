import "styles/globals.css";
import QueryModal from '../components/features/QueryModal';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import { RecoilProvider } from '../components/providers/RecoilProvider';
import LeftSidevar from './(home)/components/LeftSidevar';
import RightSidevar from './(home)/components/RightSidevar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <head />
      <body className="">
        <RecoilProvider>
          <div className="md:hidden">
            <Header />
          </div>
          <div className="flex justify-center md:w-[770px] lg:w-[1000px] mx-auto relative">
            <div className="sticky top-0 h-screen">
              <LeftSidevar />
            </div>
            <div className="w-[100%]">{children}</div>
            <RightSidevar />
          </div>
          <QueryModal />
          <Navigation />
        </RecoilProvider>
      </body>
    </html>
  )
}
