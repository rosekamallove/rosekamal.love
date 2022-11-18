import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorModeValue
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import {
  IoCheckmarkCircleOutline,
  IoGlobeOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoShuffle
} from 'react-icons/io5'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

const Links: React.FC = () => {
  const logoImg = `/images/logo${useColorModeValue('-light', '-dark')}.png`

  const [meme, setMeme] = useState(null)

  const updateMeme = () => {
    fetch(`https://meme-api.herokuapp.com/gimme`).then(d =>
      d.json().then(data => setMeme(data))
    )
  }

  useEffect(() => {
    updateMeme()
  }, [])

  return (
    <div className="mt-20">
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
      <header className="flex flex-col justify-center items-center ">
        <div className="rounded-full scale-75 flex justify-center items-center border-4 w-fit shadow-sm backdrop-blur-sm mt-10">
          <Image
            src="/images/profile.png"
            alt="Rose Kamal"
            height={125}
            width={125}
            className="rounded-full"
          />
        </div>
        <div className="-mt-3 font-bold flex items-center mb-10 gap-1 justify-center">
          <NextLink href="/home">rosekamal.love</NextLink>
          <IoCheckmarkCircleOutline />
        </div>
      </header>
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-2">
          <NextLink href="https://www.youtube.com/channel/UCIcZjoMa7k1w63XlP1qGbQQ">
            <div className="flex w-52 sm:w-56 h-28 mb-5 justify-center items-center gap-2 bg-[#282c34] hover:bg-[#ef3054] hover:shadow-lg text-white cursor-pointer rounded-md px-5 py-2 transition-all">
              <IoLogoYoutube size="2em" />
            </div>
          </NextLink>
          <NextLink href="https://instagram.com/rosekamallove">
            <div className="flex w-52 sm:w-40 h-28 mb-5 justify-center items-center gap-2 bg-[#282c34] hover:bg-[#ef3054] hover:shadow-lg text-white cursor-pointer rounded-md px-5 py-2 transition-all">
              <IoLogoInstagram size="2em" />
            </div>
          </NextLink>
        </div>
        {/* <div className="flex flex-col items-center bg-[#282c34] hover:bg-[#ef3054] hover:shadow-lg text-white cursor-pointer rounded-md px-5 py-2 w-lg transition-all">
          <h3 className="flex gap-2 items-center">
            Take Charge of your learning <FiExternalLink />
          </h3>
        </div> */}
      </div>
      <div className="flex items-center justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 mb-56 gap-2 max-w-lg">
          {links.map(link => (
            <li key={link.href}>
              <NextLink href={link.href}>
                <a
                  href={link.href}
                  rel="noreferrer"
                  target={link.href === '/home' ? '' : '_blank'}
                >
                  <Button
                    width="full"
                    // variant="ghost"
                    bg="#282c34"
                    _hover={{ bg: '#ef3054', color: 'white' }}
                    size="lg"
                    className={`hover:shadow-lg shadow text-lg flex justify-center items-center gap-2 py-2 rounded-full transition-all backdrop-blur-md`}
                  >
                    {link.logo}
                    {link.name}
                  </Button>
                </a>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://meme-api.herokuapp.com/gimme`)
  const data = await res.json()

  return { props: { data } }
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

export const IoLogoKroto = () => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
    />
  </Icon>
)

export const links = [
  {
    name: 'rosekamal.love',
    href: '/home',
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
    name: 'OnlyFans 😳',
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    logo: <IoGlobeOutline />
  }
]

export const MemeButton = () => (
  <Popover>
    <PopoverTrigger>
      <Button
        width="60"
        variant="ghost"
        size="lg"
        className={`hover:shadow-lg shadow text-lg flex justify-center items-center gap-2 py-2 rounded-full transition-all backdrop-blur-md`}
      >
        <IoShuffle />
        Have a laugh
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>
        <div className="flex items-center justify-center gap-5">
          Want more?
          <Button size="xs" onClick={() => updateMeme()}>
            <IoShuffle />
            <span className="pl-1">Re Shuffle</span>
          </Button>
        </div>
      </PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <div className="flex items-center justify-center gap-5 overflow-scroll">
          {meme && (
            <img height="80%" src={meme.preview[meme.preview.length - 1]}></img>
          )}
        </div>
      </PopoverBody>
    </PopoverContent>
  </Popover>
)
