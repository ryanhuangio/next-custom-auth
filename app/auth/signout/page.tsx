'use client'

import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignOutPage() {
    return (
        <div className="max-w-screen-lg mx-auto px-4 pb-0 pt-6">
            <button onClick={() => signOut({ callbackUrl: '/dashboard' })}>
                Sign out
            </button>
        </div>
    )
}
