import { signIn, signOut } from "next-auth/react";

const useAuth =()=>{

    const signInWithGoogle = async() => {
          await signIn('google', {
            callbackUrl: window.location.href,
          });
        };
        const completeSignOut = async() => {
            await signOut({
              callbackUrl: window.location.href,
            })
        }
return { signInWithGoogle, completeSignOut }
};
export  {useAuth};