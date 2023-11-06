import React, { useEffect, useState } from 'react'
import OrderListItem from './OrderListItem'
import OrderListHeader from './OrderListHeader'
import { getAllOrderByUserName } from '../../helper/order'
import { Order } from '../../interface/order'

interface OrderListProps {
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetOrderId: (orderId: string) => void;
}

const OrderList:React.FC<OrderListProps> = ({setShowEditForm, handleSetOrderId}) => {

  const [orders, setOrders] = useState([] as Order[])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchOrders() {
      const res = await getAllOrderByUserName("admin") as Order[];
      setOrders(res)
      console.log(res);
    }
    fetchOrders();
    setLoading(false);
  }, [])

  return (
    <div className='overflow-y-auto'>
      <h2 className='font-bold text-2xl py-6'>Orders</h2>
      <OrderListHeader/>
      <div className='flex flex-col'>
        
        {orders.map((order, index) => {
          return <OrderListItem 
            key={order.id} 
            orderDate={order.orderDate} 
            productCode={order.product.productCode} 
            shopCode={order.shop.shopCode} 
            orderId={order.id}
            qty={order.qty}
            setShowEditForm={setShowEditForm}
            handleSetOrderId={handleSetOrderId}
          />
        })}
      </div>
    </div>
  )
}

export default OrderList