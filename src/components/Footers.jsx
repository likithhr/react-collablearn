import React from 'react'

export default function Footers() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500">© 2025 CollabLearn. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a href="#" className="text-xs hover:underline underline-offset-4">Terms of Service</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">Privacy</a>
      </nav>
    </footer>
  )
}
