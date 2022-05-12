import { format, parseISO } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time
      style={{
        padding: '0px',
        margin: '0px',
        fontFamily: 'Raleway',
        fontWeight: '500'
      }}
      dateTime={dateString}
    >
      📅 {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
