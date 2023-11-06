import React from 'react'
interface InputProps {
  label: string,
  name: string,
  type: string,
  placeholder: string,
  value: string,
  callback: React.ChangeEventHandler<HTMLInputElement>;
}
const Input: React.FC<InputProps> = ({label, name, type, placeholder, value, callback}) => {
  return (
    <div className='pt-2'>
      <label>{label}</label>
      <input onChange={callback} name={name} type={type} placeholder={placeholder} value={value} className="border border-gray-400 p-2 w-full rounded-lg"/>
  </div>
  )
}

export default Input