import React from 'react'

interface CreateOrderConerButtonProps {
  callback: () => void
}

const CreateOrderConerButton: React.FC<CreateOrderConerButtonProps> = ({callback}) => {
  return (
      <a className='absolute bottom-0 right-0 m-4 bg-green-600 rounded-full w-[80px] h-[80px] p-4 shadow-lg ' onClick={callback}>
        <img src="/add.png" alt='add' />
      </a>
  )
}

export default CreateOrderConerButton