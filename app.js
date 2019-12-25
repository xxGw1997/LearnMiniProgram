App({
  data:{
    age:18
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户信息...
    console.log("小程序初始化完成:onLaunch")
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })

    // setTimeout(()=>{
    //   //模拟错误
    //   throw new Error()      
    // },3000)

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("显示界面:onShow")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("隐藏小程序:onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("发生错误时执行:onError")
  }
})
