import "styles/globals.css";
import Header from '../../components/layout/Header';
import LeftSidevar from './components/LeftSidevar';
import RightSidevar from './components/RightSidevar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-neutral">
        <Header />
        <div className="flex justify-center md:mx-[5%] ">
          <LeftSidevar />
          <div className="w-[100%]">{children}</div>
          <RightSidevar />
        </div>
      </body>
    </html>
  )
}
