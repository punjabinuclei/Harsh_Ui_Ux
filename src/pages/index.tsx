import Image from 'next/image'
import HomePage from '@/components/HomePage/HomePage'
import HamburgerMenu from '@/components/Sidebar/Hamburger'

export default function Home() {
  return (
    <main >
      <div className='flex md:hidden'><HamburgerMenu /></div>
      <HomePage />
    </main>
  )
}
