import wordCounter from '../lib/word-counter'

export const MinutesRead = ({ string, words }) => {
  const count = Math.ceil((string ? wordCounter(string) : words) / 225)
  return (
    <>
      <strong>
        ☕ {count} {count === 1 ? 'minute' : 'minutes'} read
      </strong>
    </>
  )
}
