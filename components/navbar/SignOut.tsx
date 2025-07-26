import React from 'react'
import { Button } from '../ui/button'
import { logout } from '@/action/auth-action'

const SignOut = () => {
  return (
    <Button className='cursor-pointer bg-violet-500 text-white dark:bg-red-500' onClick={logout}>
      Sign Out
    </Button>
  )
}

export default SignOut
