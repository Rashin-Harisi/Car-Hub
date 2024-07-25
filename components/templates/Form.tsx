import { citiesAustria } from '@/constants'
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'

interface formProps{
  setCity: (city:string) => void;
  setAddress: (address:string) =>void;
  setNote :(note:string) =>void
}
const Form = ({setAddress,setCity,setNote} : formProps) => {
  return (
    <Fieldset className="space-y-8">
      <Legend className="text-lg font-bold text-center">Delivery details</Legend>
      <Field>
        <Label className="block pl-5">Address <span className='text-sm text-gray-500'>(Please make sure enter the address completely)</span></Label>
        <Input className="mt-1 block border border-dashed border-[#274C77] w-[90%] rounded-lg mx-auto" name="address" onChange={(e)=>setAddress(e.target.value)}/>
      </Field>
      <Field>
        <Label className="block pl-5">City</Label>
        <Select className="mt-1 block border border-dashed border-[#274C77] rounded-lg w-[90%] mx-auto" name="city" onChange={(e)=>setCity(e.target.value)}>
          {citiesAustria.map((city,index)=><option key={index}>{city}</option>)} 
        </Select>
      </Field>
      <Field>
        <Label className="block pl-5 ">Delivery notes</Label>
        <Textarea className="mt-1 block border border-dashed border-[#274C77] rounded-lg w-[90%] mx-auto mb-5" name="notes" onChange={(e)=>setNote(e.target.value)} />
      </Field>
    </Fieldset>
  )
}

export default Form