'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function HeaderBarButton({ href, text }: { href: string, text: string }) {
    const pathName = usePathname()
    return (
        <Link
            href={href}
            className={`flex flex-col items-center justify-center w-full text-center hover:bg-slate-950 py-3 font-bold transition ease-in-out text-default-400 ${pathName === href ? 'text-white' : ''
                }`}
        >
            {text}
            <span className={`bg-sky-500 w-14 h-1 rounded-full relative top-3 ${pathName === href ? 'inline-block' : 'hidden'}`}></span>
        </Link>
    )
}
