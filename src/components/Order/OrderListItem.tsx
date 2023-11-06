
import React, { MouseEventHandler } from 'react'
interface OrderListItemProps {
  orderId: string,
  orderDate: string,
  productCode: string,
  shopCode: string,
  qty: string,
  bold?: boolean,
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetOrderId: (orderId: string) => void;
}
const OrderListItem: React.FC<OrderListItemProps> = ({orderDate, productCode, shopCode, orderId, qty, bold, setShowEditForm, handleSetOrderId}) => {

  const handleEditOrder: MouseEventHandler<HTMLDivElement> = (event) => {
    handleSetOrderId(orderId);
    setShowEditForm(true);

  }

  return (
    <div className={`w-full rounded-xl bg-white h-[40px] text-xs my-1
    shadow-md grid grid-rows-1 grid-cols-[1fr,1fr,1fr,1fr,1fr] justify-between items-center ${bold? "font-bold": ""}`}
    onClick={handleEditOrder}
    >
      <p className='p-2 text-center'>{orderId}</p>
      <p className='p-2 text-center'>{orderDate}</p>
      <p className='p-2 text-center'>{productCode}</p>
      <p className='p-2 text-center'>{shopCode}</p>
      <p className='p-2 text-center'>{qty}</p>


    </div>
  )
}

export default OrderListItem