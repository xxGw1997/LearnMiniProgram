
const app = getApp()
console.log(app.data.age)

Page({
  data:{
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'https://www.baidu.com',
      success:(res)=>{
        console.log(res)
      }
    })
  },
  onShow() {
    console.log('onShow')
  },
  onReady() {
    console.log('onReady')
  },
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },
  onPageScroll(obj){
    console.log(obj)
  },
  onPullDownRefresh(){
    //下拉刷新
    console.log('下拉刷新')
  },
  onReachBottom(){
    //滑倒底部
  }
})