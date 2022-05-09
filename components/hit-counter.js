import React from 'react'

export default function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined)
  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      return
    }
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/api/register-hit?slug=${slug}`)
      .then(res => res.json())
      .then(json => {
        if (typeof json.hits === 'number') {
          setHits(json.hits)
        }
      })
  }, [slug])
  if (typeof hits === 'undefined') {
    return null
  }
  return <div>{hits}</div>
}
