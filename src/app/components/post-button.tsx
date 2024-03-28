import { IconFeather } from '@tabler/icons-react'

export function PostButton() {
    return (
        <a
            href="/"
            className='bg-sky-500 cursor-pointer text-lg font-bold rounded-full disabled:opacity-40 disabled:pointer-events-none hover:bg-sky-500/85 transition ease-in-out flex justify-center items-center p-3 w-fit lg:px-5 lg:py-3 lg:min-w-[233px]'>
            <span className="hidden lg:block">Post</span>
            <IconFeather className="block lg:hidden w-fit h-auto" />
        </a>
    )
}
