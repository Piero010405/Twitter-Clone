import { IconDots } from '@tabler/icons-react'
import { CardButton } from './card-button'

export function TrendCard({ topic, tittle, numberPosts }: { topic: string, tittle: string, numberPosts: string | number }) {
    return (
        <article className='flex items-center text-white text-sm justify-between cursor-pointer w-full px-4 py-3 hover:bg-[#1D1F23] transition ease-in-out'>
            <header className='flex items-center'>
                <div className='flex flex-col gap-y-1'>
                    <span className='opacity-60'>{topic}</span>
                    <strong className='font-bold'>{tittle}</strong>
                    <span className='opacity-60'>{`${numberPosts} posts`}</span>
                </div>
            </header>

            <aside className='text-default-400'>
                <button className={'cursor-pointer relative bottom-5'}>
                    <CardButton stat={''} color="blue">
                        <IconDots className='size-5' />
                    </CardButton>
                </button>
            </aside>
        </article>
    )
}
