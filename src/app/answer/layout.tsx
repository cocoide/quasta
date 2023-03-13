import TopBackNavi from '../../components/Elements/Navigation/TopBackNavi'
import AnswerModal from '../../features/Answer/components/AnswerModal'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full border-x border-shadow ">
      <TopBackNavi pageTitle={"おすすめの回答"} />
      {children}
      <p className="w-[100%] h-[100px]"></p>
      <AnswerModal />
    </div>
  )
}
