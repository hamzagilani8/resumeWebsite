import { EmailIcon, FacebookIcon, GithubIcon, LinkedinIcon, TwiterIcon, WhatsappIcon } from './icons'
import Image from 'next/image'

const Topbar = ({ data }: { data: any }) => {
  const { name, role, contactLinks } = data
  return (
    <div className='flex flex-wrap sm:flex-col md:flex-row lg:justify-start lg:space-x-16 bg-black text-white p-8 xl:rounded-br-full'>
      <div>
        <Image src='/Dp.jpg' alt={'Profile Picture'} width="200" height="200" className='rounded-full'></Image>
      </div>
      <div className='flex items-center sm:flex-col md:flex-row flex-wrap  lg:space-x-16 lg:space-y-32'>
        <span>
        <h1 className='text-6xl text-yellow'>{name}</h1>
        <h2 className='text-2xl'>{role}</h2>
        </span>
        <span className='lg:pl-20'>
          <h2 className='text-xl'>Contact Me</h2>
          <div className='inline-flex justify-between space-x-5'>
            <a href={contactLinks?.[0]} aria-label={'Email Id'}><EmailIcon className="h-6 w-6 text-blue-500" /></a>
            <a href={contactLinks?.[1]} aria-label={'Twiter Link'}><TwiterIcon className="h-6 w-6 text-blue-500" /></a>
            <a href={contactLinks?.[2]} aria-label={'Linkedin Profile Link'}><LinkedinIcon className="h-6 w-6 text-blue-500" /></a>
            <a href={contactLinks?.[3]} aria-label={'Facebook profile Link'}><FacebookIcon className="h-6 w-6 text-blue-500" /></a>
            <a href={contactLinks?.[4]} aria-label={'Whatsapp Link'}><WhatsappIcon className="h-6 w-6 text-blue-500" /></a>
            <a href={contactLinks?.[5]} aria-label={'WGithub Link'}><GithubIcon className="h-6 w-6 text-blue-500" /></a>
          </div>
        </span>
      </div>
      </div>
  )
}

export default Topbar