import Instagram from 'instagram-web-api'
import { useState, useEffect } from 'react'

export default function Photos() {
  const [InstgramPosts, setInstagramPosts] = useState()

  useEffect(() => {
    async function setIGPosts() {
      const client = new Instagram({
        username: process.env.IG_USERNAME,
        password: process.env.IG_PASSWORD
      })
      const posts = await client.getPhotosByUsername({
        username: 'rosekamallove'
      })
      setInstagramPosts(posts)
    }
    setIGPosts()
  }, [])

  return (
    <div>
      <h1>Instagram Posts</h1>
      {console.log(InstgramPosts)}
    </div>
  )
}
