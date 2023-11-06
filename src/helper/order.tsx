import axios from "axios";
import { Order, OrderItemCreate } from "../interface/order";


export const getAllOrderByUserName = async (userName: string): Promise<Order[] | undefined>  => {
  try {
    const res = await axios.get(process.env.REACT_APP_SERVER_ENDPOINT+`/order/user/${userName}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }

};


export const getOrderByOrderId = async (orderId: string): Promise<Order | undefined>  => {
  try {
    const res = await axios.get(process.env.REACT_APP_SERVER_ENDPOINT+`/order/${orderId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }

}

export const createOrder = async (orderItemCreate: OrderItemCreate): Promise<OrderItemCreate | undefined>  => {
  try {
    const res = await axios.post(process.env.REACT_APP_SERVER_ENDPOINT+`/order`, orderItemCreate);
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }

}

export const updateOrder = async (orderId: string, orderItemCreate: OrderItemCreate): Promise<OrderItemCreate | undefined>  => {
  try {
    const res = await axios.put(process.env.REACT_APP_SERVER_ENDPOINT+`/order/${orderId}`, orderItemCreate);
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }

}