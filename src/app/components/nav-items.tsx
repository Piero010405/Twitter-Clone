export function NavItems({ children, tittle }: { children: React.ReactNode, tittle: string | null }) {
    return (
        <a className={`flex flex-row items-center gap-x-4 rounded-full w-fit hover:bg-[#1D1F23] transition ease-in-out ${tittle == null ? 'p-2' : 'p-2 lg:py-2 lg:px-3'}`} href="">
            {children}
            {
                tittle !== null && (
                    <span className="text-xl hidden lg:block">
                        {tittle}
                    </span>
                )
            }
        </a>
    )
}
