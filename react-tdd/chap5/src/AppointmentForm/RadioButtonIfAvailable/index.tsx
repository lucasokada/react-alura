import React from 'react'

type AvailableTime = {
  startsAt: number
}

interface Props {
  availableTimeSlots: AvailableTime[]
  date: number
  timeSlot: number
}

const RadioButtonIfAvailable = ({
  availableTimeSlots,
  date,
  timeSlot
}: Props) => {
  
  const mergeDateAndTime = (date: number, timeSlot: number) => {
    const time = new Date(timeSlot)
    return new Date(date).setHours(
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
      time.getMilliseconds()
    )
  }
  
  const startsAt = mergeDateAndTime(date, timeSlot)
  
  if(availableTimeSlots.some((timeSlot) => timeSlot.startsAt === startsAt)) {
    return (
      <input
        name='startsAt'
        type='radio'
        value={startsAt}
      />
    )
  }
  
  return null
}

export default RadioButtonIfAvailable