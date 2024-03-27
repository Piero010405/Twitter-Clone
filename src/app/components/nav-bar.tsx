import { IconBell, IconBookmark, IconBrandX, IconClipboardList, IconDotsCircleHorizontal, IconHomeFilled, IconMail, IconSearch, IconUser, IconUsers } from '@tabler/icons-react'
import { NavItems } from './nav-items'
import { PostButton } from './post-button'
import { ProfileButton } from './profile-button'
import { type User } from '@supabase/auth-helpers-nextjs'

export function NavBar({ userSession }: { userSession: User | null }) {
    const name = userSession?.user_metadata?.user_name
    const userName = userSession?.user_metadata?.user_name
    const userAvatarUrl = userSession?.user_metadata?.avatar_url

    return (
        <nav className="sticky top-0 md:min-w-[260px] w-full flex flex-col justify-between gap-y-7">
            <ul className='flex flex-col gap-y-2 w-full'>
                <li>
                    <NavItems tittle={null}>
                        <IconBrandX className='size-9' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Home'>
                        <IconHomeFilled className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Explore'>
                        <IconSearch className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Notifications'>
                        <IconBell className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Messages'>
                        <IconMail className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Lists'>
                        <IconClipboardList className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Bookmarks'>
                        <IconBookmark className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Communities'>
                        <IconUsers className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Premium'>
                        <IconBrandX className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='Profile'>
                        <IconUser className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <NavItems tittle='More'>
                        <IconDotsCircleHorizontal className='size-7' />
                    </NavItems>
                </li>
                <li>
                    <PostButton />
                </li>
            </ul>
            <ProfileButton name={name} username={userName} imageUrl={userAvatarUrl} />
        </nav>
    )
}
