// pages/components/cancelOrder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
   // 点击取消订单按钮弹出一个弹出框
    //打开透明层
    cancelOrderMask: function () {
      this.setData({
        isRuleTrue: true
      })
    },
    // 点击取消订单并重新预约按钮弹出一个弹出框
    //打开透明层
    cancelOrderMask1: function () {
      this.setData({
        isRuleTrue1: true
      })
    },
    // 点击再想想钮关闭弹出层
    closeMask(){
      this.setData({
        isRuleTrue: false
      })
    },
    // 取消订单并重新预约的按钮弹出层的关闭开关
    closeMask1() {
      this.setData({
        isRuleTrue1: false
      })
    },
    // 点击确定跳转到订单页面
    goToOrder() {
      wx.switchTab({
        url: '/pages/order/index'
      })
    },
    // 取消订单并重新预约按钮弹出的弹出框,点击确定跳转到家电维修页面
    goToJiaDianWeiXiu(){
      wx.navigateTo({
        url: '/pages/components/jiadianweixiu/index'
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