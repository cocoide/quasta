import { signIn, signOut, useSession } from "next-auth/react";

const useAuth =()=>{

    const signInWithGoogle = async() => {
          await signIn('google', {
            callbackUrl: window.location.href,
          });
        };
        const { data: session,status } = useSession()
        const user = session?.user
        
return { signInWithGoogle,session, user, status }
};
export  {useAuth};