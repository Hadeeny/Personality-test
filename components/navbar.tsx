import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
const Navbar = () => {
  return (
    <div className='flex  justify-between gap-x-4'>
        <Button variant={'link'}>
            <Link className='text-orange-300/50 text-lg' href={'/'}>Sourrounded by idiots</Link>
        </Button>
        <Button variant={'link'}>
            <Link className='text-white' href={'/about'}>Take test</Link>
        </Button>
    </div>
  )
}

export default Navbar