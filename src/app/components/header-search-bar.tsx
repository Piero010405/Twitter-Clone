import { IconSearch } from '@tabler/icons-react'

export function HeaderSearchBar() {
    return (
        <>
            <header className='flex sticky top-0 z-50 bg-black min-w-[348px] h-[52.8px]'>
                <form action="" className='flex justify-center items-center w-full'>
                    <input
                        className="peer block w-full bg-[#202327] rounded-full px-12 h-[42px] text-base border-1 border-[#202327] placeholder:text-gray-400 focus:bg-inherit focus:outline-none focus:border-sky-500"
                        placeholder="Search" />
                    <IconSearch className="text-gray-400 absolute left-4 top-1/2 size-5 -translate-y-1/2 peer-focus:text-sky-500" />
                </form>
            </header>
        </>
    )
}
