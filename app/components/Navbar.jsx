import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
    <h1>My Helpdesk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='ticket'>Tickets</Link>
    </nav>
  )
}

export default Navbar
