import React, { useState } from 'react'
import Input from '../Input'
import SubmitButton from '../SubmitButton'
import { createOrder } from '../../helper/order'
interface CraeteOrderFormProps {
  showForm: boolean,
  callback: () => void
}

const CraeteOrderForm: React.FC<CraeteOrderFormProps> = ({showForm, callback: callback}) => {
  const [formData, setFormData] = useState({
    shopCode: '',
    productCode: '',
    userName: 'admin', //hardcode, some kind of local storage implementation
    qty: ''
  })
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


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
    //send api POST request body: formData
    const res = await createOrder(formData);
    console.log(res);
    setLoading(false);
    setSuccess(true);

  }

  return (

    <>
      <form className={`absolute bottom-0 left-0 bg-white shadow-xl 
      p-6
      z-20
      rounded-t-2xl h-[450px] w-full transition-all ${showForm?'':'translate-y-full'}`}>
        <h1 className='font-bold text-lg py-4'>我要報數</h1>
        <Input label={"Shop Code"} name={"shopCode"} type={"text"} placeholder={"e.g. BW12"} value={formData.shopCode} callback={handleInputChange} />
        <Input label={"Product Code"} name={"productCode"} type={"text"} placeholder={"e.g. FM2022"} value={formData.productCode} callback={handleInputChange} />
        <Input label={"QTY"} name={"qty"} type={"text"} placeholder={"e.g. 1"} value={formData.qty} callback={handleInputChange} />
        <div className="pt-8">
          <SubmitButton callback={handleFormSubmit} text={loading?"Loading":"提交"}/>
        </div>
      </form>
      <div className={`absolute bottom-0 left-0 bg-white shadow-xl 
      p-6
      z-20
      flex flex-col items-center justify-center
      rounded-t-2xl h-[450px] w-full transition-all ${success?'':'translate-y-full'}`}>
          <img src="/success.png" alt="success"/>
          <h1 className='font-bold text-lg py-4'>報數成功</h1>

          <SubmitButton callback={() => setSuccess(false)} text={"再次提交?"}/>
      </div>
      <div className={`absolute bottom-0 left-0 h-screen w-full transition-all ${showForm?'':'translate-y-full'} z-10`}
       onClick={() => {
        callback();
        setSuccess(false);
       }
      }>

      </div>
    </>

  )
}

export default CraeteOrderForm