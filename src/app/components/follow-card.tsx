'use client'

import { useState } from 'react'
export function FollowCard({ children, userName = 'unknown', initialIsFollowing }: { children: React.ReactNode, userName: string, initialIsFollowing: boolean }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='flex items-center text-white text-sm justify-between cursor-pointer w-full px-4 py-3 hover:bg-[#1D1F23] transition ease-in-out'>
            <header className='flex items-center gap-2'>
                <img
                    className='rounded-full size-10'
                    alt={`Avatar of ${userName}}`} src={`https://unavatar.io/${userName}`} />
                <div className='flex flex-col'>
                    <strong className='font-bold hover:underline'>{children}</strong>
                    <span className='opacity-60'>{`@${userName}`}</span>
                </div>
            </header>

            <aside>
                <button className={`text-black rounded-full px-4 py-2 font-bold cursor-pointer border border-white ${isFollowing ? 'bg-[#16181C] text-white border border-white/20 w-24 hover:text-red-500 hover:bg-red-500/10 hover:border hover:border-red-500 group' : 'bg-white'}`} onClick={handleClick}>
                    <span className='block group-hover:hidden'>{text}</span>
                    <span className='hidden group-hover:block'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
