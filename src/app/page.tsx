import { createServerComponentClient } from '@supabase/auth-helpers-nextjs' // usando el Server Component Client porque estamos en un Server Component
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostsList } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'
import { HeaderBarFollowing } from './components/header-bar-following'
import { TwitterCard } from './components/twitter-card'
import { WhoFollowList } from './components/who-to-follow-list'
import { TrendList } from './components/trend-list'
import { HeaderSearchBar } from './components/header-search-bar'
import { NavBar } from './components/nav-bar'
export default async function Home() {
  // * SUPABASE
  // * pnpm install @supabase/auth-helpers-nextjs @supabase/supabase-js
  // ? guardamos la sesion en las cookies de next
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: { session } } = await supabase.auth.getSession()

  // * Asi hacemos un Select
  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(*)')
    .order('created_at', { ascending: false })

  // REDIRIGIMOS AL LOGIN sin next auth
  if (session === null) {
    return (
      redirect('/login')
    )
  }

  return (
    <>
      <main className='flex flex-row justify-between'>
        <section className='ml-auto'>
          <NavBar />
        </section>
        <section className='max-w-[600px] w-full mx-auto border-r border-l border-white/20 min-h-screen'>
          <HeaderBarFollowing />
          <ComposePost userAvatarUrl={session.user?.user_metadata.avatar_url} />
          {
            (posts != null) && <PostsList posts={posts} />
          }
        </section>

        <section className='mr-auto flex flex-col gap-y-4'>
          <HeaderSearchBar />
          <TwitterCard tittle='Trends for you'>
            <TrendList />
          </TwitterCard>

          <TwitterCard tittle='Who to follow'>
            <WhoFollowList />
          </TwitterCard>
        </section>

        {/* <AuthButtonServer /> */}
      </main>
    </>
  )
}
