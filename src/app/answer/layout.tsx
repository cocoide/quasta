import TopBackNavi from '../../components/ui/TopBackNavi'
import AnswerModal from './AnswerModal'

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
