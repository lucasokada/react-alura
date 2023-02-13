import React from 'react'

type AvailableTime = {
  startsAt: number
}

interface Props {
  availableTimeSlots: AvailableTime[]
  date: number
  timeSlot: number
  checkedTimeSlot: number
}

const RadioButtonIfAvailable = ({
  availableTimeSlots,
  date,
  timeSlot,
  checkedTimeSlot
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
    const isChecked = startsAt === checkedTimeSlot
    return (
      <input
        name='startsAt'
        type='radio'
        value={startsAt}
        checked={isChecked}
      />
    )
  }
  
  return null
}

export default RadioButtonIfAvailable