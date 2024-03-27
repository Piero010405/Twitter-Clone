import { IconBell, IconBookmark, IconBrandX, IconClipboardList, IconDotsCircleHorizontal, IconHomeFilled, IconMail, IconSearch, IconUser, IconUsers } from '@tabler/icons-react'
import { NavItems } from './nav-items'

export function NavBar() {
    return (
        <nav className="sticky top-0 max-w-[260px] w-full">
            <ul className='flex flex-col gap-y-3'>
                <li>
                    <NavItems tittle={null}>
                        <IconBrandX className='size-9' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Home'>
                        <IconHomeFilled className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Explore'>
                        <IconSearch className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Notifications'>
                        <IconBell className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Messages'>
                        <IconMail className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Lists'>
                        <IconClipboardList className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Bookmarks'>
                        <IconBookmark className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Communities'>
                        <IconUsers className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Premium'>
                        <IconBrandX className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Profile'>
                        <IconUser className='size-7'/>
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='More'>
                        <IconDotsCircleHorizontal className='size-7'/>
                    </NavItems>
                </li>
            </ul>
        </nav>
    )
}
