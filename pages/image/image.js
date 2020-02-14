// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    console.log('选中图片');
    wx.chooseImage({//系统选中手机相册中图片的api
      success: res=> {
        //1.取出图片路径
        const path = res.tempFilePaths[0]
        //2.设置imagePath
        this.setData({
          imagePath:path
        })
      },
    })
  },

  handleImageLoad(){
    console.log('图片已加载')
  }
})