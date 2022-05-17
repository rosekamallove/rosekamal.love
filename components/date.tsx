import { format, parseISO } from 'date-fns'
import React from 'react'

interface Props {
  dateString: string
}

const Date: React.FC<Props> = ({ dateString }) => {
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

export default Date
