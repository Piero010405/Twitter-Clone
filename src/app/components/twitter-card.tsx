export function TwitterCard({ children, tittle }: { children: React.ReactNode, tittle: string }) {
    return (
        <>
            <div className='min-w-[348px] flex flex-col'>
                <section className='flex flex-col rounded-t-xl bg-[#16181C]'>
                    <header className='text-white font-bold text-xl p-4'>
                        <h1>{tittle}</h1>
                    </header>
                    {children}
                </section>
                <button className="bg-[#16181C] cursor-pointer text-sky-500 p-4 rounded-b-xl max-w-[350px] text-left text-base hover:bg-[#1D1F23] transition ease-in-out">
                    Show more
                </button>

            </div>
        </>
    )
}
