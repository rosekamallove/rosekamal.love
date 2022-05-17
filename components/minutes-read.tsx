import React from 'react'
import wordCounter from '../lib/word-counter'

interface Props {
  string?: string
  words?: number
}

export const MinutesRead: React.FC<Props> = ({ string, words }) => {
  const count = Math.ceil((string ? wordCounter(string) : words) / 225)
  return (
    <>
      <strong>
        ☕ {count} {count === 1 ? 'minute' : 'minutes'} read
      </strong>
    </>
  )
}
