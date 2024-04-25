'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Import the specific component you need
const LandingPage = dynamic(() => import('../components/LandingPage'), { ssr: false })

export function ClientOnly() {
    return <LandingPage />
}