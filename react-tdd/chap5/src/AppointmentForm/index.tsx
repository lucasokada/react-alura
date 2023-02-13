import { useState } from 'react'
import TimeSlotTable from './TimeSlotTable'

export type Service = {
  service: string
  startsAt: number
}

type AvailableTime = {
  startsAt: number
}

interface Props {
  selectableServices?: string[]
  original?: Service
  salonOpensAt?: number
  salonClosesAt?: number
  today?: Date,
  availableTimeSlots?: AvailableTime[]
}

const AppointmentForm = ({
  selectableServices = [], 
  original = {service: '', startsAt: 0},
  salonOpensAt = 0,
  salonClosesAt = 0,
  today = new Date(),
  availableTimeSlots = []}
  : Props) => {
  
  return (
    <form>
      <select 
        name='service'
        defaultValue={original.service}
      >
        <option />
        {selectableServices.map(service => (
          <option key={service}>{service}</option>
        ))}
      </select>
      <TimeSlotTable 
        salonOpensAt={salonOpensAt} 
        salonClosesAt={salonClosesAt} 
        today={today} 
        availableTimeSlot={availableTimeSlots} 
        checkedTimeSlot={original.startsAt}
      />
    </form>
  )
}

export default AppointmentForm