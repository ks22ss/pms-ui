import React from 'react'
interface SubmitButtonProps {
  callback: React.FormEventHandler<HTMLButtonElement>;
  text?: string;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({callback, text}) => {
  return (
    <button onClick={callback} className="bg-blue-800 text-white p-2 w-full rounded-lg">{text}</button>
  )
}

export default SubmitButton