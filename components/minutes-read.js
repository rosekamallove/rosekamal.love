import wordCounter from '../lib/word-counter'

export const MinutesRead = ({ string, words }) => {
  return (
    <>
      <strong>
        ☕ {Math.ceil((string ? wordCounter(string) : words) / 225)}{' '}
        {Math.ceil((string ? wordCounter(string) : words) / 255) == 1
          ? 'minute'
          : 'minutes'}{' '}
        read
      </strong>
    </>
  )
}
