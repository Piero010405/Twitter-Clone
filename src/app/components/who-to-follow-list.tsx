import { FollowCard } from './follow-card'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'reddit.com',
        name: 'Mister Reddit',
        isFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo Martinez',
        isFollowing: false
    },
    {
        userName: 'twitter.com',
        name: 'Elon Musk',
        isFollowing: false
    }
]

export function WhoFollowList() {
    return (
        <>
            <main className='flex flex-col'>
                {
                    users.map(({ userName, name, isFollowing }) => {
                        return (
                            <FollowCard
                                key={userName}
                                userName={userName}
                                initialIsFollowing={isFollowing}
                            >
                                {name}
                            </FollowCard>
                        )
                    })
                }
            </main>
        </>
    )
}
