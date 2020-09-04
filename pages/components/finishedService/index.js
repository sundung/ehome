// pages/components/finishedService/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 点击  结束服务   按钮弹出一个弹出框
    //打开透明层
    cancelOrderMask: function () {
      this.setData({
        isRuleTrue: true
      })
    },
     // 点击 取消按钮   关闭弹出层
     closeMask(){
      this.setData({
        isRuleTrue: false
      })
    },
    // 点击确定跳转到   --> 首页
    goToHome() {
      wx.switchTab({
        url: '/pages/home/index'
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})