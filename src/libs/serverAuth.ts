import { getServerSession } from 'next-auth'
import { authOptions } from './authOption'


export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getLoginUser() {
  const session = await getSession()
  return session?.user
}