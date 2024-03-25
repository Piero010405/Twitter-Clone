import { IconSettings } from '@tabler/icons-react'
import { HeaderBarButton } from './header-bar-button'

export function HeaderBarFollowing() {
    return (
        <>
            <header className='flex flex-row items-center justify-between border-b border-white/20 sticky top-0 z-50 bg-black/40 backdrop-blur-[10px]'>
                <HeaderBarButton href='/' text='For you' />
                <HeaderBarButton href='/following' text='Following' />
                <button className='px-4 group'>
                    <div className='rounded-full group-hover:bg-slate-900 p-1 transition ease-in-out'>
                        <IconSettings className='size-6 ' />
                    </div>
                </button>
            </header>
        </>
    )
}
