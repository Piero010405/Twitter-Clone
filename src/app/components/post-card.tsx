'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
// import { useState } from 'react'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'

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
        <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
            <CardHeader className="justify-between">
                <div className="flex gap-x-3">
                    <Avatar isBordered radius="full" size="md" src={avatarUrl} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
                    </div>
                </div>

            </CardHeader>

            <CardBody className="px-3 py-0 text-xs text-white-400">
                <p>
                    {content}
                </p>
            </CardBody>

            <CardFooter className="gap-3">
                <button>
                    <IconMessageCircle className='size-4' />
                </button>
                <button>
                    <IconHeart className='size-4' />
                </button>
                <button>
                    <IconRepeat className='size-4' />
                </button>
            </CardFooter>
        </Card>
    )
}
