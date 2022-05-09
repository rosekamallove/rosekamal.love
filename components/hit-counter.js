import { Box } from '@chakra-ui/react'
import React from 'react'
import ReactRetroHitCounter from 'react-retro-hit-counter'

export default function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined)
  React.useEffect(() => {
    // Don't count hits on localhost
    // if (process.env.NODE_ENV !== 'production') {
    //   return
    // }
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/api/register-hit?slug=${slug}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
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
  return (
    <Box mt={2}>
      <ReactRetroHitCounter
        size={20}
        segmentThickness={2}
        hits={hits}
        borderThickness={3}
      />
    </Box>
  )
  // return <div>{hits} Hits</div>
}
