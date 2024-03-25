export function Tag({ children, text }: { children: React.ReactNode, text: string }) {
    return (
        <>
            <span className='text-sm font-bold text-sky-500 w-fit rounded-full px-3 py-1 hover:bg-sky-500/10 cursor-pointer flex flex-row items-center justify-center gap-x-1 mb-2'>
                {children}
                {text}
            </span>
        </>
    )
}
