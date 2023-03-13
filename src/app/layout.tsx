import "styles/globals.css";

import LoginModal from '../features/Auth/components/LoginModal';
import Navigation from '../components/Layouts/Mobile/Navigation';
import NextAuthProvider from '../components/Providers/NextAuthProvider';
import { RecoilProvider } from '../components/Providers/RecoilProvider';
import LeftSidevar from '../components/Layouts/Desktop/LeftSidevar';
import RightSidevar from '../components/Layouts/Desktop/RightSidevar';
import QuestionModal from '../features/Question/components/QuestionModal';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <head />
      <body className="">
        <NextAuthProvider>
          <RecoilProvider>
            <div className="flex justify-center md:w-[770px] lg:w-[1100px] xl:w-[1200px]  mx-auto relative">
            <div className="sticky top-0 h-screen">
              <LeftSidevar />
            </div>
            <div className="w-[100%]">{children}</div>
            <RightSidevar />
            </div>
            <QuestionModal />
            <LoginModal />
            <Navigation /> 
        </RecoilProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
