import { FC, Suspense } from 'react'
import { useQueryClient } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { LogoutIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { supabase } from '../utils/supabase'
// import useStore from '../store'
// import { Spinner } from './Spinner'
// import { UserProfile } from './UserProfile'
// import { Notification } from './Notification'
// import { Feed } from './Feed'


export const DashBoard: FC = () => {
  const signOut = () => {
    supabase.auth.signOut
  }
  return (
    <>
      <LogoutIcon
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
    </>
  )
}


