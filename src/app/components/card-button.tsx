export function CardButton({ children, stat, color }: { children: React.ReactNode, stat: number | string, color: string }) {
    const colorVariants: Record<string, string> = {
        red: 'group-hover:text-red-500',
        blue: 'group-hover:text-blue-500',
        green: 'group-hover:text-green-500'
    }

    const backgroundVariants: Record<string, string> = {
        red: 'group-hover:bg-red-950',
        blue: 'group-hover:bg-blue-950',
        green: 'group-hover:bg-green-950'
    }

    return (
        <button className="flex flex-row justify-center items-center group ">
            <span className={`${colorVariants[color]} ${backgroundVariants[color]} group-hover:opacity-80 rounded-full p-1 transition-all ease-linear`}>
                {children}
            </span>
            <span className={`text-sm ${colorVariants[color]}`}>
                {stat}
            </span>
        </button>
    )
}
