import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButton } from './auth-button-client'
import { cookies } from 'next/headers'

// SEPARAMOS la logica del SERVIDOR con la del CLIENTE
export async function AuthButtonServer() {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    return <AuthButton session={session} />
}
