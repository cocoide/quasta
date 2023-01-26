import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-[#2d2c5e]">{children}</body>
    </html>
  )
}
