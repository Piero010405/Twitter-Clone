import { useState } from 'react'
export function FollowCard({ children, userName = 'unknown', initialIsFollowing, formatUserName }: { children: React.ReactNode, userName: string, initialIsFollowing: boolean, formatUserName: (n: string) => string }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='flex flex-col gap-y-5 rounded-sm'>
            <header>
                <img alt="El avatar de Pipo" src={`https://unavatar.io/${userName}`} />
                <div>
                    <strong>{children}</strong>
                    <span className='tw-followingCard-span'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-follow'>{text}</span>
                    <span className='tw-followCard-unfollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
