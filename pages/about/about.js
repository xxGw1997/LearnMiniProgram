// pages/about/about.js
Page({
  data: {
    message:'点击一下'
  },
  handleClick(){
    this.setData({
      message:'点击两下'
    })
  }
})