import "styles/globals.css";
import Header from '../../components/layout/Header'
import InvitedSeminar from './InvitedSeminar';

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
        <div className="flex justify-center sm:mx-[5%] lg:mx-[10%]  sm:pt-8 lg:pt-12 space-x-7 lg:space-x-10">
          <div className="w-[100%]">{children}</div>
          <InvitedSeminar />
        </div>
      </body>
    </html>
  )
}
