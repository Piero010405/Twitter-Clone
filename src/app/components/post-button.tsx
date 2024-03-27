import { IconFeather } from '@tabler/icons-react'

export function PostButton() {
    return (
        <a
            href="/"
            className='bg-sky-500 cursor-pointer text-lg font-bold rounded-full disabled:opacity-40 disabled:pointer-events-none hover:bg-sky-500/85 transition ease-in-out flex justify-center items-center p-3 w-fit md:px-5 md:py-3 md:min-w-[233px]'>
            <span className="hidden md:block">Post</span>
            <IconFeather className="block md:hidden size-4" />
        </a>
    )
}
