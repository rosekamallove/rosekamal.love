import { Icon, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import {
  IoGlobeOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoTwitter
} from 'react-icons/io5'

const Links: React.FC = () => {
  const bg = `${useColorModeValue(
    'bg-[#abb2bf] text-white',
    'bg-[#282c34] text-gray-100'
  )}`

  const logoImg = `/images/logo${useColorModeValue('-light', '-dark')}.png`

  return (
    <div
      style={{
        background:
          'url(/images/art-background.webp) repeat center center fixed',
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Head>
        <title>Links - Rose Kamal Love</title>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="shortcut icon" href={logoImg} />
        <meta name="description" content="@rosekamallove on the web" />
        <meta name="author" content="Rose Kamal Love" />
        <meta name="twitter:title" content="Rose Kamal Love" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RoseKamalLove1" />
        <meta name="twitter:creator" content="@RoseKamalLove1" />
        <meta property="og:site_name" content="Rose Kamal Love" />
        <meta name="og:title" content="Rose Kamal Love" />
        <meta property="og:type" content="website" />
      </Head>
      <header className="flex flex-col items-center">
        <div className="rounded-full flex justify-center items-center border-4 w-fit shadow-xl backdrop-blur-sm mt-10">
          <Image
            src="/images/rosek.jpg"
            alt="Rose Kamal"
            height={125}
            width={125}
            className="rounded-full"
          />
        </div>
        <div
          className={`${bg} bg-opacity-50 hover:scale-125 py-1 px-2 rounded-full border-2 font-bold shadow backdrop-blur-sm text-sm mt-1 mb-10 transition-all`}
        >
          <a href="http://instagram.com/rosekamallove">@rosekamallove</a>
        </div>
      </header>
      <ul className="flex flex-col items-center justify-center gap-2">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              rel="noreferrer"
              target="_blank"
              className={`${bg} bg-opacity-50 w-60 font-semibold hover:font-bold box-border border hover:shadow-2xl hover:scale-110 shadow backdrop-blur-md hover:backdrop-blur-sm text-lg flex justify-center items-center gap-2 py-2 rounded-full transition-all`}
            >
              {link.logo}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Links

export const IoLogoDev = () => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
    />
  </Icon>
)
export const links = [
  {
    name: 'Official Website',
    href: 'https://rosekamal.love',
    logo: <IoGlobeOutline />
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/RoseKamalLove1',
    logo: <IoLogoTwitter />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rose-kamal-love-1146141b0/',
    logo: <IoLogoLinkedin />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/rosekamallove',
    logo: <IoLogoGithub />
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@rosekamall',
    logo: <IoLogoMedium />
  },
  {
    name: 'dev.to',
    href: 'https://dev.to/rosekamallove',
    logo: <IoLogoDev />
  },
  {
    name: 'OnlyFans 😳',
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    logo: <IoGlobeOutline />
  }
]
