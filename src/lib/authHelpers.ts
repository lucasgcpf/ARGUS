import type { Session } from '@supabase/supabase-js'

import { supabase } from './supabaseClient'

export async function getCurrentUserSession(): Promise<Session | null> {
  if (!supabase) {
    return null
  }

  const { data, error } = await supabase.auth.getSession()

  if (error) {
    console.error('Unable to fetch current user session.', error)
    return null
  }

  return data.session
}
