// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScroll(scrolled)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-accent z-50 transition-width"
      style={{ width: `${scroll}%` }}
    />
  )
}
