import { NextResponse, type NextRequest } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// opcion de Next js para evitar que cachee de forma estatica la
// ruta y que siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

// REQUEST es la URL con la que entramos
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  // Obtenemos el token desde las SEARCH PARAMAS

  if (code != null) {
    const supabase = createRouteHandlerClient({ cookies })
    // usando el codigo que le hemos pasado por la url
    // nos devuelve la sesion de usuario
    await supabase.auth.exchangeCodeForSession(code)
  }

  // redirigimos a la url original
  return NextResponse.redirect(requestUrl.origin)
  // return NextResponse.redirect('/')
}
