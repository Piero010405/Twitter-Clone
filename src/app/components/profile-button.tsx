import { IconDots } from '@tabler/icons-react'

export function ProfileButton({ imageUrl, name, username }: { imageUrl: string, name: string, username: string }) {
    return (
        <a className='flex flex-row justify-between items-center rounded-full p-2 hover:bg-[#1D1F23] transition ease-in-out cursor-pointer lg:w-full'>
            <article className='flex flex-row gap-x-4 items-center'>
                <img
                    className='rounded-full size-10'
                    src={imageUrl}
                    alt={`Avatar of ${name}`}
                />
                <div className='lg:flex lg:flex-col hidden'>
                    <strong>{name}</strong>
                    <span className='font-light text-default-400'>@{username}</span>
                </div>
            </article>
            <IconDots className='mr-1 size-5 hidden lg:block' />
        </a>
    )
}
