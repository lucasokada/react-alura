import TimeSlotTable from './TimeSlotTable'

type Service = {
  service: string
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
  original = {service: ''},
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
      <TimeSlotTable salonOpensAt={salonOpensAt} salonClosesAt={salonClosesAt} today={today} availableTimeSlot={availableTimeSlots}/>
    </form>
  )
}

export default AppointmentForm