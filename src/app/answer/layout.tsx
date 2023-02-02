import TopBackNavi from '../../components/ui/TopBackNavi'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full border-x border-shadow h-full">
      <TopBackNavi pageTitle={"おすすめの回答"} />
      {children}
    </div>
  )
}
