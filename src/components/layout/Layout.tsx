/** @format */

import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div style={{ maxWidth: '50%', margin: '0 auto' }}>{children}</div>
}
