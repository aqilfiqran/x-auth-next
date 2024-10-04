export enum OrderStatus {
  ORDERED = 0,
  ACCEPTED = 1,
  TIMEOUT = 2,
  CANCELLED = 3,
  DONE = 4,
}

export const OrderStatusText = {
  [OrderStatus.ORDERED]: 'Menunggu driver',
  [OrderStatus.ACCEPTED]: 'Driver menuju restoran',
  [OrderStatus.TIMEOUT]: 'Driver tidak menanggapi',
  [OrderStatus.CANCELLED]: 'Pesanan dibatalkan',
  [OrderStatus.DONE]: 'Pesanan selesai',
};
