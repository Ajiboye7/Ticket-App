import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
    <h1>My Helpdesk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='ticket'>Tickets</Link>
      <Link href='ticket/create'>Create</Link>
    </nav>
  )
}

export default Navbar
