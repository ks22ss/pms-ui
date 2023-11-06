import React, { useState } from 'react'
import CraeteOrderForm from '../components/Order/CraeteOrderForm';
import CreateOrderConerButton from '../components/Order/CreateOrderConerButton';
import OrderList from '../components/Order/OrderList';
import EditOrderForm from '../components/Order/EditOrderForm';

const Home = () => {
  const [orderId, setOrderId] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleSetCurrentOrderId = (orderId: string) => {
    setOrderId(orderId);
    setShowEditForm(true);
  };
  return (
    <>
        <div className=' min-h-screen'>
          <OrderList setShowEditForm={setShowEditForm} handleSetOrderId={handleSetCurrentOrderId}/>
        </div>
        <CreateOrderConerButton callback={() => setShowCreateForm(prev => !prev)} />
        <CraeteOrderForm showForm={showCreateForm} callback={() => setShowCreateForm(false)} />
        <EditOrderForm showForm={showEditForm} callback={() => setShowEditForm(false)} orderId={orderId} />
        
    </>

  )
}

export default Home