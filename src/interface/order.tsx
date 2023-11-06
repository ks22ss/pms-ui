export interface Order {
  id: string,
  orderDate: string,
  product: Product,
  shop: Shop,
  user: User,
  qty: string,
}

export interface OrderItemCreate {
  productCode: string,
  shopCode: string,
  qty: string,
  userName: string

}

export interface Product {
  productCode: string,
  productType: string,
  productTypeSpecification: string,
  brandName: string,
  startDate: string,
  endDate: string
}

export interface Shop {
  shopCode: string,
  shopAddress: string,
  territory: string
}

export interface User {
  id: number,
  username: string,
  email: string,
  password: string,
  userType: string,
  joinDate: string,
  endDate: string
}