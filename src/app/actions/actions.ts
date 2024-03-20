'use server'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
// * SERVER ACTION
export const addPost = async (formData: FormData) => {
  const content = formData.get('content')
  console.log(content)
  if (content == null) return

  const supabase = createServerActionClient({ cookies })

  // verificamos que el usuario este autenticado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return

  // INSERTAMOS A LA BD la INFORMACIÓN del POST
  await supabase.from('posts').insert({ content, user_id: user.id })
  // REVALIDAMOS EL PATH para que vuelva a hacer FETCH a los POSTS
  revalidatePath('/')
}
