import "styles/globals.css";
import Header from '../../components/layout/Header'

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
        {children}
      </body>
    </html>
  )
}
