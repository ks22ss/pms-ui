import React, { useEffect, useState } from 'react'
import Input from '../Input';
import SubmitButton from '../SubmitButton';
import { getOrderByOrderId, updateOrder } from '../../helper/order';
import { Order } from '../../interface/order';

interface EditOrderFormProps {
  showForm: boolean,
  callback: () => void,
  orderId: string
}

const EditOrderForm: React.FC<EditOrderFormProps> = ({showForm, callback, orderId}) => {
  const [formData, setFormData] = useState({} as Order);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchOrders() {
      const res = await getOrderByOrderId(orderId) as Order;
      setFormData(res);
      console.log(res);
    }
    fetchOrders();
    setLoading(false);
  }, [orderId])

  const handleInputChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    })

  }

  const handleFormSubmit : React.FormEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setLoading(true);
    //send api PUT request body: formData
    const res = await updateOrder(orderId, {
      shopCode: formData.shop.shopCode,
      productCode: formData.product.productCode,
      userName: "admin", //some kind of local storage implementation
      qty: formData.qty
    });
    console.log(res);
    setLoading(false);
    setSuccess(true);

  }
  if(loading) return (<div>Loading...</div>)
  return (

    <>
      <form className={`absolute bottom-0 left-0 bg-white shadow-xl 
      p-6
      z-20
      rounded-t-2xl h-[450px] w-full transition-all ${showForm?'':'translate-y-full'}`}>
        <h1 className='font-bold text-lg py-4'>我要更改 Order Id: {orderId}</h1>
        <Input label={"Shop Code"} name={"shopCode"} type={"text"} placeholder={"e.g. BW12"} value={formData?.shop?.shopCode} callback={handleInputChange} />
        <Input label={"Product Code"} name={"productCode"} type={"text"} placeholder={"e.g. FM2022"} value={formData?.product?.productCode} callback={handleInputChange} />
        <Input label={"QTY"} name={"qty"} type={"text"} placeholder={"e.g. 1"} value={formData?.qty} callback={handleInputChange} />
        <div className="pt-8">
          <SubmitButton callback={handleFormSubmit} text={"更改"}/>
        </div>
      </form>
      <div className={`absolute bottom-0 left-0 bg-white shadow-xl 
      p-6
      z-20
      flex flex-col items-center justify-center
      rounded-t-2xl h-[450px] w-full transition-all ${success?'':'translate-y-full'}`}>
          <img src="/success.png" alt="success"/>
          <h1 className='font-bold text-lg py-4'>更改成功</h1>

          <SubmitButton callback={() => setSuccess(false)} text={"需要再次更改?"}/>
      </div>
      <div className={`absolute bottom-0 left-0 h-screen w-full transition-all ${showForm || success?'':'translate-y-full'} z-10`} onClick={
        () => {
          callback()
          setSuccess(false)
        }}>

      </div>
    </>
  )
}

export default EditOrderForm
