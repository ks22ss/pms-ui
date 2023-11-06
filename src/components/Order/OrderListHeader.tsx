import React from 'react'



const OrderListHeader = () => {
  return (
    <div className={`w-full rounded-xl bg-blue-700 text-white h-[40px] text-xs my-1
    shadow-md grid grid-rows-1 grid-cols-[1fr,1fr,1fr,1fr,1fr] justify-between items-center font-bold`}>
      <p className='p-2 text-center'>Order ID</p>
      <p className='p-2 text-center'>Date</p>
      <p className='p-2 text-center'>Product</p>
      <p className='p-2 text-center'>SHOP</p>
      <p className='p-2 text-center'>Qty</p>
    </div>
  )
}
export default OrderListHeader