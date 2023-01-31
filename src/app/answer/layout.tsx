export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full border-x border-shadow h-full">
      {children}
    </div>
  )
}
