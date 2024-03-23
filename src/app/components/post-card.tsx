'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
// import { useState } from 'react'
import { IconMessageCircle, IconHeart, IconRepeat, IconChartBar, IconBookmark, IconShare2 } from '@tabler/icons-react'
import { CardButton } from './card-button'

export function PostCard({
    userName,
    avatarUrl,
    userFullName,
    content
}: {
    userName: string
    avatarUrl: string
    userFullName: string
    content: string
}) {
    // const [isFollowed, setIsFollowed] = useState(false)
    return (
        <Card className="shadow-none bg-transparent hover:bg-slate-950 transition border-b rounded-none cursor-pointer border-white/20 flex flex-row items-start gap-x-1">
            <CardHeader className="h-full w-12">
                <div className="flex">
                    <Avatar isBordered radius="full" size="md" src={avatarUrl} />
                </div>
            </CardHeader>

            <article className='mt-3 w-full'>
                <CardBody className="px-3 py-0 text-xm text-white-400">
                    <div className="flex flex-row gap-1 items-start justify-self-end mb-2">
                        <h4 className="text-small font-semibold  text-default-600">{userFullName}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
                    </div>
                    <p>
                        {content}
                    </p>
                </CardBody>

                <CardFooter className="gap-3 justify-between text-default-400">
                    <CardButton stat={19} color="blue">
                        <IconMessageCircle className='size-5' />
                    </CardButton>

                    <CardButton stat={8} color="red">
                        <IconHeart className='size-5' />

                    </CardButton>
                    <CardButton stat={233} color="green">
                        <IconRepeat className='size-5' />

                    </CardButton>
                    <CardButton stat={'44k'} color="blue">
                        <IconChartBar className='size-5' />
                    </CardButton>

                    <aside className='flex justify-end gap-x-1'>
                        <CardButton stat={''} color="blue">
                            <IconBookmark className='size-5' />
                        </CardButton>
                        <CardButton stat={''} color="blue">
                            <IconShare2 className='size-5' />
                        </CardButton>
                    </aside>

                </CardFooter>
            </article>

        </Card>
    )
}
