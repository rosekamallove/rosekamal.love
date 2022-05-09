import { Box } from '@chakra-ui/react'
import React from 'react'
import ReactRetroHitCounter from 'react-retro-hit-counter'

export default function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined)
  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      return
    }
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
    return (
      <Box mt={1}>
        <ReactRetroHitCounter
          size={15}
          segmentThickness={2}
          hits={0}
          segmentActiveColor="#696969"
          segmentInActiveColor="#696969"
          borderThickness={3}
        />
      </Box>
    )
  }
  return (
    <Box mt={1}>
      <ReactRetroHitCounter
        size={15}
        segmentThickness={2}
        hits={hits}
        borderThickness={3}
      />
    </Box>
  )
}
