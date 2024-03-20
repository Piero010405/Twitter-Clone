'use client'
import { Avatar } from '@nextui-org/react'
import { ComposePostButton } from './compose-post-button'
import { addPost } from '../actions/actions'
import { useRef } from 'react'
export function ComposePost({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    const formRef = useRef<HTMLFormElement>(null)
    return (
        <>
            <form ref={formRef} action={async (formData) => {
                await addPost(formData)
                formRef.current?.reset()
            }} className='flex flex-row p-4 border-b border-white/20'>
                <Avatar isBordered radius="full" size="md" src={userAvatarUrl} className='mr-4' />
                <div className='flex flex-1 flex-col gap-y-4'>
                    <textarea
                        name='content'
                        rows={4}
                        className='w-full text-2xl bg-black placeholder-gray-500 resize-none p-2 border-b border-white/20 focus:outline-none overflow-y-hidden h-auto'
                        placeholder='What is happening?!'></textarea>
                    <ComposePostButton />
                </div>
            </form>
        </>
    )
}
