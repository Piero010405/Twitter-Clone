'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GithubIcon } from './icons'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

export function AuthButton({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient()
    const router = useRouter()
    const handleSigIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: '/auth/callback' // <-- lo vamos a redirigir a un endpoint de nuestra aplicacion
            }
        })
    }

    const handleLogOut = async () => {
        await supabase.auth.signOut()
        router.refresh() // refrescamos
    }

    return (
        <header>
            {
                session === null
                    ? (<button onClick={handleSigIn} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2">
                        <GithubIcon />
                        Sign in with Github
                    </button>)
                    : (
                        <Button onClick={handleLogOut}>Log out</Button>
                    )
            }

        </header>
    )
}
