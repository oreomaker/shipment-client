import axios from 'axios';

export interface ContactData {
  name: string;
  address: string;
  phone: string;
}

export interface CargoData {
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export interface ShipOrderData {
  sender: ContactData;
  receiver: ContactData;
  cargo: CargoData;
}

// eslint-disable-next-line no-shadow
export enum ShipmentType {
  ORDER = 'ORDER',
  PROCESSING = 'PROCESSING',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
}

export interface ShipmentData {
  description: string;
  orderId: number;
  type: ShipmentType;
}

// eslint-disable-next-line no-shadow
export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  DELIVERED = 'DELIVERED',
}

export interface OrderInfo {
  id: number;
  userId: number;
  fromAddress: string;
  toAddress: string;
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  cargo: CargoData;
  createTime: string;
  orderStatus: OrderStatus;
  shipments: ShipmentData[];
}

export interface OrderPrice {
  price: number;
  basePrice: number;
  pricingType: string;
}

export function getShipOrderPrice(data: ShipOrderData) {
  return axios.post<OrderPrice>('/api/order-price', data);
}

export function createShipOrder(data: ShipOrderData) {
  return axios.post('/api/orders', data);
}

export function updateOrderShipment() {
  return axios.post('/api/orders/shipment');
}

export function getAllOrders() {
  return axios.get<OrderInfo[]>('/api/orders');
}

export function getOrder(id: number) {
  return axios.get<OrderInfo>(`/api/orders/${id}`);
}
