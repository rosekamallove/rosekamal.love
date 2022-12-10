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
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoShuffle
} from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

const Links: React.FC = () => {
  const logoImg = `/images/logo${useColorModeValue('-light', '-dark')}.png`

  const [meme, setMeme] = useState(null)
  console.log(meme)

  const updateMeme = () => {
    fetch(`https://meme-api.herokuapp.com/gimme`).then(d =>
      d.json().then(data => setMeme(data))
    )
  }

  useEffect(() => {
    updateMeme()
  }, [])

  return (

    <div className="bg-[url('/images/green-home-bg.png')] bg-cover w-[100vw] h-[100vh] flex items-center justify-center text-white">
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
      <div className="bg-black/40 rounded-lg relative grid place-items-center place-content-center w-full md:w-5/6 lg:w-4/6 min-h-[60vh] min-h-4/6 backdrop-blur-md">
        <div className="flex flex-col my-20 mx-2 sm:mx-10 lg:mx-20 gap-10 justify-center">
          <div className="flex">
            <div className="relative overflow-hidden -mb-5 mt-2 rounded-full py-1.5 px-4 text-xs md:text-base lg:text-lg font-bold leading-6 ring-1 ring-white/10 hover:ring-white/20 transition-all">
              <span className="flex gap-2">
                Struggling to learn to code? Here&apos;s you solution!
                <a
                  href="https://www.kroto.in"
                  className="font-semibold flex gap-1 hover:gap-2 transition-all justify-center items-center text-[#ef3054]"
                >
                  Read more <BsArrowRight />
                </a>
              </span>
            </div>
          </div>
          <p className="text-5xl md:text-7xl">Rose Kamal Love</p>
          <p className="text-xl md:text-2xl ml-1 -mt-8 md:-mt-5">
            A friendly ambivert, trying to make a life out of code who also
            happens to love taking photos
          </p>
          <p className="text-lg md:text-xl ml-1 -mt-5">
            <NextLink href="/home">
              <a className="font-semibold hover:text-[#ef3054] flex gap-2 hover:gap-3 transition-all items-center">
                More about me
                <BsArrowRight />
              </a>
            </NextLink>
          </p>
          <div className="flex gap-10 ml-2 mt-5">
            {socials.map(link => (
              <NextLink key={link.href} href={link.href}>
                <div className="rounded-full hover:text-[#ef3054] flex items-center justify-center cursor-pointer scale-125 hover:scale-150 active:scale-125 transition-all w-10 h-10">
                  {link.logo}
                </div>
              </NextLink>
            ))}
          </div>
        </div>
        <div className="absolute -top-36 lg:left-52">
          <div className="rounded-full scale-75 flex justify-center items-center border-4 w-fit shadow-sm backdrop-blur-sm mt-10">
            <Image
              src="/images/profile.png"
              alt="Rose Kamal"
              height={200}
              width={200}
              className="rounded-full"
            />
          </div>
        </div>
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

export const socials = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCIcZjoMa7k1w63XlP1qGbQQ',
    logo: <IoLogoYoutube />
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/rosekamallove',
    logo: <IoLogoInstagram />
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
  }
]

export const MemeButton = ({
  meme,
  updateMeme
}: {
  meme: any
  updateMeme: () => null
}) => (
  <Popover>
    <PopoverTrigger>
      <div className="rounded-full hover:text-[#ef3054] flex items-center justify-center cursor-pointer hover:scale-105 active:scale-100 transition-all">
        <IoShuffle />
        Have a laugh
      </div>
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
