import { AuthButtonServer } from '../components/auth-button-server'

export default function Login() {
    return (
        <section className='grid place-content-center justify-center items-center gap-y-4 min-h-screen'>
            <h1 className='text-xl font-bold text-center'>Login on Twitter</h1>
            <AuthButtonServer />
        </section>
    )
}
