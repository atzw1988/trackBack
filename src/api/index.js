const api = {
  orgId: '40c7055f203749f7a5f6a5f96f43a36e',
  login: '/park/sys/login/wechatLogin',
  code: '/park/sys/login/sendMsg',
  noPayList: '/park/app/parking/order/recoverOrders',
  rule: '/park/app/parking/check_placeno',
  checkParking: '/park/app/parking/check_placeno',
  roadRule: '/park/app/nearby/parking/getChargeRule',
  parking: '/park/app/parking/order',
  balance: '/park/sys/user/getBalance',
  balancePay: '/park/public/h5Pay/balancePay',
  wxPay: '/park/public/h5Pay/weChatPay',
  aliPay: '/park/app/h5/alipay',
  checkCar: '/park/app/car/validCarNo',
  list: '/service-cultivate-soa/api/fbBury/listAll'
}
export default api
