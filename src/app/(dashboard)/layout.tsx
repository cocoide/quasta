
import { redirect } from 'next/navigation'
import { getLoginUser } from '../../libs/serverAuth'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getLoginUser()
    if (!user) {
        redirect("/")
    };
    return (
        <div className="w-full border-x border-shadow h-full">
            {children}
        </div>
    )
}