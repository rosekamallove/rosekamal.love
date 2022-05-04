import { format, parseISO } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time
      style={{
        padding: '0px',
        margin: '0px',
        fontFamily: 'Poppins',
        fontSize: '14px'
      }}
      dateTime={dateString}
    >
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
