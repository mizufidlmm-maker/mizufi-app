'use client'

import React from 'react'
import { reownConfig } from './config'

// Reown/AppKit init differs slightly by version.
// This wrapper keeps your app structure clean.
// You’ll only touch this file when you wire the exact adapter init.

export function ReownProvider({ children }: { children: React.ReactNode }) {
  // TODO: initialize @reown/appkit + @reown/appkit-adapter-solana here
  return <>{children}</>
}
