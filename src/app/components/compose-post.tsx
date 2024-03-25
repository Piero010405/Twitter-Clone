'use client'
import { Avatar } from '@nextui-org/react'
import { ComposePostButton } from './compose-post-button'
import { addPost } from '../actions/actions'
import { type ChangeEvent, useEffect, useRef, useState } from 'react'
import { Tag } from './tag'
import { IconCalendarTime, IconGif, IconMapPin, IconMoodSmile, IconPhoto, IconServer, IconWorld } from '@tabler/icons-react'
import { CardButton } from './card-button'
export function ComposePost({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    const formRef = useRef<HTMLFormElement>(null)
    const [isFirstFocus, setFirstFocus] = useState(false)
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const [val, setVal] = useState('')

    const handleFirstFocus = () => {
        if (isFirstFocus) return
        setFirstFocus(true)
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setVal(e.target.value)
    }

    useEffect(() => {
        if (textAreaRef.current == null) return
        textAreaRef.current.style.height = 'auto'
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
    }, [val])

    return (
        <>
            <form ref={formRef} action={async (formData) => {
                await addPost(formData)
                formRef.current?.reset()
            }} className='flex flex-row p-4 border-b border-white/20'>
                <Avatar isBordered radius="full" size="md" src={userAvatarUrl} className='mr-4' />
                <article className='flex flex-1 flex-col gap-y-4'>
                    <div className={`flex flex-col gap-y-1 ${isFirstFocus ? 'border-b border-white/20' : ''}`}>
                        <textarea
                            name='content'
                            className={'w-full text-2xl bg-black placeholder-gray-500 resize-none p-2 focus:outline-none overflow-y-hidden'}
                            placeholder='What is happening?!'
                            value={val}
                            onChange={handleChange}
                            rows={1}
                            ref={textAreaRef}
                            onFocus={handleFirstFocus}>
                        </textarea>
                        {
                            isFirstFocus && <Tag text='Everyone can reply'>
                                <IconWorld className='size-4' />
                            </Tag>
                        }
                    </div>

                    <aside className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-x-2'>
                            <CardButton stat={''} color="blue">
                                <IconPhoto className='size-5 text-sky-500' />
                            </CardButton>
                            <CardButton stat={''} color="blue">
                                <IconGif className='size-5 text-sky-500' />
                            </CardButton>
                            <CardButton stat={''} color="blue">
                                <IconServer className='size-5 text-sky-500' />
                            </CardButton>
                            <CardButton stat={''} color="blue">
                                <IconMoodSmile className='size-5 text-sky-500' />
                            </CardButton>
                            <CardButton stat={''} color="blue">
                                <IconCalendarTime className='size-5 text-sky-500' />
                            </CardButton>
                            <CardButton stat={''} color="blue">
                                <IconMapPin className='size-5 text-sky-500' />
                            </CardButton>
                        </div>
                        <ComposePostButton />
                    </aside>
                </article>
            </form >
        </>
    )
}
